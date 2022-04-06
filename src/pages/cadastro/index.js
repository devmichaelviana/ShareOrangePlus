import React from "react";
import "./style.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = () =>{
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",    
      password: "",
    },
    validationSchema: yup.object({     
      email: yup.string().email('Email Invalido').required("O campo é obrigatório"),    
      password: yup.string().required("O campo é obrigatório"),      
    }),
    onSubmit: (values) => { 
      alert(JSON.stringify(values, null, 2))
      navigate("/perfil")
    },
  });
  
  return (
    <>
      <header className="cabecalho">
      </header> 
      <main>
        <div className="containerCadastro">
           <form onSubmit={formik.handleSubmit} noValidate >
            <h2>Technical.<br/><span className="segundoNome">Share</span></h2>
            <p>Insira seus dados aqui</p> 
            <div className="inputCadastro">
            <label htmlFor="">Nome</label>
              <input 
              type="text"
              id="name"
              label="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="Carlos Sales"
              />
            </div>   

            <div className="inputCadastro">
            <label htmlFor="">E-mail</label>
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
            <div className="inputCadastro">
            <label htmlFor="">Telefone</label>
              <input 
              type="number"
              id="telefone"
              label="telefone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.telefone}
              placeholder="(88) 7414-5882"
              />
            </div>
              <div className="inputCadastro">
                <label htmlFor="">Senha</label>
              <input 
              type="senha"
              id="senha"
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
          </form>
        </div>
      </main>
    </>
  )
}

export default Login