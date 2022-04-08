import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="container">      
        <h1>Estou sendo carregada</h1>
        <Link to="/home" >Ir para home</Link>
      </div>
    </>
  )
}

export default Login;