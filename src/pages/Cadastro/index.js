import React from "react";
import "./style.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { BsLinkedin, BsGoogle } from "react-icons/bs";
import { CgEye } from "react-icons/cg";
import  LogoFCamara  from "../../assets/logoFcamara.png"
const cadastro = () =>{
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues: {
      nome: '',
      email: "",    
      senha: "",
      contato: "",
      mentor: false,
      habilidades: []
    },
    onSubmit: async (values) => { 
      if(values.habilidades.length > 0){
        values.mentor = true
        var habilidades = values.habilidades.split(',')
  
      }
      var nome = values.nome
      var email = values.email
      var senha = values.senha
      var contato = values.contato
      var mentor = values.mentor
      console.log(habilidades)
      const item = {nome,email,senha,contato,mentor,habilidades}
      console.log('os item', item)
      let result = await fetch("http://localhost:8080/users/auth/register",{
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
      if(result.status === 201) {
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result))
        navigate("/perfil")
      }
      // else {
      //   error.innerText = 'Login invalido'
      // }
    },

    
  });
  function mostrarSenha() {
    var tipo = document.getElementById("senha");
    if(tipo.type === "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
  }

  function show(){
  var areaMentor = document.getElementsByClassName("areaMentor")
  console.log(areaMentor[0].style.display)
  if(areaMentor[0].style.display === "block"){
    areaMentor[0].style.display = 'none';
  }else{
    areaMentor[0].style.display = 'block';

  }
}
  return (
    <div className="container">      
    <main className="main-cadastro">
      
      <div className="wrapperCadastro">
      <h2 className="title">Technical.<br/><span className="segundoNome">Share</span></h2>  
         <form onSubmit={formik.handleSubmit} noValidate >
                                    
          <div className="input">
          <label className="tituloInput" htmlFor="">Nome</label>
          <input 
            type="nome"
            id="nome"
            label="nome"
            errors={formik.touched.nome && formik.errors.nome}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nome}
            placeholder="Nome"
            />
            {formik.touched.nome && formik.errors.nome ? (
              <span className="alerta">{formik.errors.nome}</span>
            ) : null }
          </div>
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
            <div className="inputSenha">
              <label className="tituloInput"
                htmlFor="">Digete Sua Senha:</label>
                <div className="mostrarSenha">
              <input 
                type="password"
                id="senha"
                label="senha"
                errors={formik.touched.senha && formik.errors.senha}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.senha}
                placeholder="Senha"
                className="senha"
              >
              </input>
              <CgEye className="olho" onClick={mostrarSenha}/>
              
              </div>
              {formik.touched.senha && formik.errors.senha ? (
                <span className="alerta">{formik.errors.senha}</span>
              ) : null }              
          </div> 
          <div className="inputCheck">
            
            
            <label className="labelCheckbox" for="myCheck">Quero ser mentor</label> 
            <input   type="checkbox"  id="switch" name="theme" onClick={show} className="checkbox" /><label className="Toggle"for="switch">Toggle</label>
            <input   type="checkbox" className="checkbox" id="myCheck" />
          </div>
          <div className="areaMentor"> 
          <div className="input-area-mentor">
            <label className="tituloInput"
              htmlFor="">Informe as áreas que pretende mentorar</label>
            <input 
              type="text"
              id="habilidades"
              label="habilidades"
              errors={formik.touched.habilidades && formik.errors.habilidades}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.habilidades}
              placeholder="Exemplo: back end, carreira, soft skills, javascript"
            />
            {formik.touched.habilidades && formik.errors.habilidades ? (
              <span className="alerta">{formik.errors.habilidades}</span>
            ) : null }                 
          </div>
          <div className="input">
              <label className="tituloInput"
              htmlFor="">Por qual meio quer ser contatado?</label>
            <select  placeholder="escolha" className="select">
              <option disabled value="" selected> Selecione o meio de contato</option>
              <option value="WhatsApp">Número de  celular (WhatsApp)</option>
              <option value="email">E-mail</option>
              <option value="linkedin">LinkedIn</option>
              <option value="ligação">Número de telefone (ligação)</option>
            </select>                   
          </div>

          <div className="input">
            <label className="tituloInput"
              htmlFor="">Digite seu contato:</label>
            <input 
              type="text"
              id="contato"
              label="contato"
              errors={formik.touched.contato && formik.errors.contato}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.contato}
              placeholder="número, email ou link"
            />
            {formik.touched.contato && formik.errors.contato ? (
              <span className="alerta">{formik.errors.contato}</span>
            ) : null }                 
          </div>
          </div>
          </div>           
          <div className="buttons">
            <button type="submit">Cadastrar</button>    
          </div> 
          <div>
            <p>Se preferir, faça login com as redes</p>
            <div className="icons">
                <BsLinkedin className="linkedin"/> <BsGoogle  className="gmail"/>
            </div>
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

export default cadastro