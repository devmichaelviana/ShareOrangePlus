import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Tela1 from '../../assets/tela1.png';
import Tela2 from '../../assets/tela2.png';
import Tela3 from '../../assets/tela3.png';
import Pontilhados from '../../assets/pontilhados.png';
import LogoFCamara from '../../assets/logoFcamara.png';

function PageHome() {
  return (
    <>
      <div className="tudo">
        <div className="centralizar">
          <header>
            <div className="sangue__laranja">
              <h1>#SangueLaranja,</h1>
              <img src={Pontilhados} />
            </div>{' '}
            {/** sangue__laranja */}
            <div className="chamada">
              <p>
                Conheça a plataforma que te conecta com profissionais em busca de
                evolução.
              </p>
              <Link className="login__top" to="/login">
                Login
              </Link>
            </div>{' '}
            {/** chamada */}
          </header>

          <section className="apresentacao">
            <div className="img__texto">
              <img className="img1" src={Tela1} alt="imagem1" />
              <p>
                “ Para você, <strong className="strong1">#SangueLaranja</strong>{' '} que está conectado em todo lugar “
              </p>
            </div>
            <div className="img__texto">
              <img className="img2" src={Tela2} alt="imagem2" />
              <p>“ <strong className="strong1">Diversifique</strong> seus relacionamentos e conexões{' '}
                <strong className="strong1">profissionais</strong> “
              </p>
            </div>
            <div className="img__texto">
              <img className="img3" src={Tela3} alt="imagem3" />
              <p>
                “ Seja <strong className="strong1">mentor</strong> ou{' '}
                <strong className="strong1">mentorado</strong>, a experiência
                compartilhada impulsiona o{' '}
                <strong className="strong1">crescimento</strong>“
              </p>
            </div>
          </section>

          <section className="cadastrar__centralizar">
            <div className="cadastrar">
              <button className="buttonCadastro">
                <Link className="cadastro" to="/cadastro">
                  Cadastre-se
                </Link>
              </button>
              <p className="title__login">
                Já possui conta? Faça seu{' '}
                <Link className="login" to="/login">
                  <strong className="strong1">login aqui</strong>
                </Link>
              </p>
            </div>
          </section>
        </div>{' '}
        {/** centralizar */}
        <div className="footer__centralizar">
          <footer>
            <img className="logo" src={LogoFCamara} alt="Logo FCamara" />
          </footer>
        </div>
      </div>
    </>
  );
}

export default PageHome;
