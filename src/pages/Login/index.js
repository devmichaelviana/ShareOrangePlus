import React from "react";
import "./style.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import  LogoFCamara  from "../../assets/logoFcamara.png"

const Login = () =>{
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
    onSubmit: (values) => { 
      alert(JSON.stringify(values, null, 2))
      navigate("/perfil")
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
              placeholder="@email"
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
              placeholder="senha"
              />
              {formik.touched.password && formik.errors.password ? (
                <span className="alerta">{formik.errors.password}</span>
              ) : null }             
            </div>
            <div className="buttons">
              <button type="submit">Entrar</button>   
              <p className="esqueceSenha">Esqueceu sua senha?</p>   
            </div>               
          </form>
        </div>
      
      </main>
        <div className="rodape">
          <img src={LogoFCamara} alt="" />
        </div>
      
    </div>
  )
}

export default Login