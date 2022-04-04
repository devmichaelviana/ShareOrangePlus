import React from "react";
import './login.css';
import { Link } from "react-router-dom";

const Login = () => {
    return(
        <section className="login">
            <Link className="conect" to="/">Tela inicial</Link>
            <h1>Login</h1>       
            <div className="logo">
                <a href="https://www.flaticon.com/free-icons/user" title="user icons">
                    <img src="https://cdn-icons.flaticon.com/png/512/2354/premium/2354573.png?token=exp=1649084848~hmac=2b8180cb46a52f814d131e43d7291006" alt="login-logo" />
                </a>
                {/* fim-da-classe-logo */}
            </div>
            <div className="login-input-email">
                <input type="text" placeholder="Digite seu email" />
            </div>
            <div className="login-input-senha">
                <input type="password" placeholder="Digite sua senha" />
            </div>
            <button type="submit">Entrar</button>
            <div className="botoes-inferiores">
                <button className="criar-conta">Criar conta</button>
                <button className="recuperar-senha">Recuperar senha</button>
            </div>
        {/* fim-da-classe-login */} 
        </section>
    )
}

export default Login;
