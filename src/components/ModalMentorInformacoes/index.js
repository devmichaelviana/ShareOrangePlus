import React from 'react';
import Modal from '../Modal';
import { ReactComponent as Email } from '../../assets/iconEmail.svg';
import { ReactComponent as Whats } from '../../assets/iconWhatsaoo.svg';
import './style.css';

const ModalMentorInformacoes = ({ modal, setModal }) => {
  return (
    <Modal isOpen={modal} onClose={() => setModal(false)}>
      <div className="containerModal">
        <div className="wrapperModal">
          <h2 className="tituloModal">Orientações sobre mentoria</h2>
          <p className="descricaoModal">
            Confira abaixo os canais disponibilizados pelo mentor para que seja
            realizada a reunião
          </p>
          <div className="dadosMentor">
            <img
              className="fotoMentor"
              src="https://smashinglogo.com/static/img/virtual-designers/peter.gif"
              alt=""
            />
            <div className="detalheDados">
              <p>Maria Oliveira Silveira</p>
              <p>Desenvolvedora Full-Stack</p>
            </div>
          </div>

          <div className="containerContatoMentor">
            <div className="contatoMentor">
              <Email />
              <p className="textoContatoMentor">mariaoliveira@email.com.br</p>
            </div>
            <div className="contatoMentor">
              <Whats />
              <p className="textoContatoMentor">(77) 7777-77777</p>
            </div>
          </div>

          <p className="textoInformativo">
            Entre em contato com o mentor para marcar o dia e horário da reunião
          </p>
        </div>

        <footer className="footerModal">
          <p>
            Technical. <br /> <b>Share</b>
          </p>
          <button
            className="buttonFechaModal"
            type="button"
            onClick={() => setModal(false)}
          >
            OK
          </button>
        </footer>
      </div>
    </Modal>
  );
};

export default ModalMentorInformacoes;
