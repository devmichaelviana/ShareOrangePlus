import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () =>{
  return (
    <>
      <div className="container">      
          <form className="formulario">
            <h1>Nome do projeto</h1>
            <p className="insira__nome">Insira seus dados aqui</p>
          </form>
      </div>
    </>
  )
}

export default Home;