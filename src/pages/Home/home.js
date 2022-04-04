import React from "react";
import "./home.css";
import { Link } from "react-router-dom"


function PageHome() {
  return(
    <>
    <header className="cabecalho">
      <div >
        <Link className="conect" to="/create">Ir na primeira tela</Link>  
      </div>   
      <div >
        <Link className="conect" to="/tela">Ir na segunda tela</Link>  
      </div>         
    </header>

    <main>
      <h1>Essa será a tela principal</h1>
      <Link className="conect" to="/login">Login</Link>
    </main>
    </>
  )
}

export default PageHome;