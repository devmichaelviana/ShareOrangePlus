import React from "react";
import { Link } from "react-router-dom"

function Page2() {
  return(
    <>
     <header className="cabecalho">
      <div>
        <Link className="conect" to="/">Tela inicial</Link>  
      </div> 
    </header>    
     <h1> Essa será a terceira tela</h1>
    </>
  )
}
export default Page2