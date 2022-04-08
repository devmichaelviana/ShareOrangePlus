import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Tela1 from "../../assets/tela1.png";
import Tela2 from "../../assets/tela2.png";
import Tela3 from "../../assets/tela3.png";
import  LogoFCamara  from "../../assets/logoFcamara.png";



function PageHome() {
  return(
    <div className="containerHome">
   
    <div className="wrapperHome">
    <div className="apresentacao">
    <h1 className="tituloApresentacao">#SangueLaranja,</h1>  
      <div className="containerTexto">
    <p className="textoApresentacao">Conheça a plataforma que te conecta com <br /> profissionais em busca de evolução.</p>     
        <Link className="loginTop" to="/login">Login</Link>  
        </div>
    </div>

    <section className="informacoes">
      <div className="ItemMenu">
        <img  className="img1"src={Tela1} alt="" />
        <p className="titleItem">"Para você, <span className="laranja">#SangueLaranja,</span> que está conectado em todo lugar"</p>
      </div>
      <div className="ItemMenu">
        <img src={Tela2} alt="" />
        <p className="titleItem">"<span className="laranja">Diversifique</span> seus relacionamentos e conexões <span className="laranja">profissionais</span></p>
      </div>
      <div className="ItemMenu">
        <img src={Tela3} alt="" />
        <p className="titleItem">"Seja <span className="laranja">mentor</span> ou <span className="laranja">mentorado</span>, a experiência compartilhada impulsiona o <span className="laranja">crescimento</span></p>        
      </div>
    </section>
    <div className="irCadastro">
    <Link className="cadastro" to="/cadastro">Cadastre-se </Link> 
    <p className="titleLogin">Já possui conta? Faça seu  <Link className="login" to="/login">login aqui</Link></p>
    </div>
    </div>
    <div className="rodape">
          <img  className="logoFCamara"src={LogoFCamara} alt="" />
        </div>  

    </div>

  )
}

export default PageHome;