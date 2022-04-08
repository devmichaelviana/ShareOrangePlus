import React, {useState} from "react";
import "./style.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import  LogoFCamara  from "../../assets/logoFcamara.png";


const Login = () =>{
  let error = document.getElementsByClassName("error")[0]
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email('Email Invalido').required("O campo é obrigatório"),
      password: yup.string().required("O campo é obrigatório").min(8, "Mínimo de 8 caracteres").max(12, "Máximo de 12 caracteres"),
    }),
    onSubmit: async (values) => { 
      // alert(JSON.stringify(values, null, 2))
      const email = values.email
      const senha = values.password
      const item = {email,senha}
      error.innerText = 'Carregando ....'
      let result = await fetch("http://localhost:8080/users/auth/login",{
        method: "POST",
        headers: {
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
        body: JSON.stringify(item)
      });
      console.log(result);
      if(result === undefined){
        console.log('isso')
      }
      console.log('result', result.status);
      if(result.status === 200) {
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result))
        navigate("/perfil")
      }
      else {
        error.innerText = 'Login invalido'
      }
      
    },
  });

  
  return (
    <div className="container">      
      <main className="main">  
        <div className="wrapper">
        <h2 className="title">Technical.<br/><span className="segundoNome">Share</span></h2>    
           <form onSubmit={formik.handleSubmit} noValidate >
                                      
            <div className="input">
            <label className="tituloInput" htmlFor="">E-mail</label>
              <input 
              type="email"
              id="email"
              label="email"
              errors={formik.touched.email && formik.errors.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="seuemail@email.com.br"
              />
              {formik.touched.email && formik.errors.email ? (
                <span className="alerta">{formik.errors.email}</span>
              ) : null }
            </div>
              <div className="input">
                <label className="tituloInput"
                htmlFor="">Senha</label>
              <input 
              type="password"
              id="password"
              label="password"
              errors={formik.touched.password && formik.errors.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="********"
              />
              {formik.touched.password && formik.errors.password ? (
                <span className="alerta">{formik.errors.password}</span>
              ) : null }             
            </div>
            <div className="buttons">
              <button type="submit">Entrar</button>   
              <p className="esqueceSenha">Esqueceu sua senha??</p>   
            </div>               
          </form>
            <p className="error"></p>
        </div>
      
      </main>
        <div className="rodape">
          <img  className="logoFCamara"src={LogoFCamara} alt="" />
        </div>      
    </div>
  )
}

export default Login