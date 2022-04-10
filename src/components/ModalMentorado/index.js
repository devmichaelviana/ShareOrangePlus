import React from 'react';
import Modal from '../Modal';
import imgMentorado from '../../assets/mentorado.png';
import './style.css';

const ModalMentorado = ({ modalMentorado, setModalMentorado }) => {
  return (
    <Modal isOpen={modalMentorado} onClose={() => setModalMentorado(false)}>
      <div className="containerModal">
        <div className="wrapperModal">
          <h2 className="tituloModal">
            Compartilhare seu conhecimento,
            <br /> <p className="textDestaque">se torne um mentor</p>
          </h2>
          <p className="descricaoModal">
            Habilite essa opção na página de seu perfil
          </p>

          <img className="imgCenterModal" src={imgMentorado} alt="" />

          <div className="containerBtns">
            <button
              className="buttonHabilitar"
              type="button"
              onClick={() => setModalMentorado(false)}
            >
              Habilitar
            </button>
            <button
              className="buttonAgoraNao"
              type="button"
              onClick={() => setModalMentorado(false)}
            >
              Agora não
            </button>
          </div>
        </div>

        <footer className="footerModal">
          <p>
            Technical. <br /> <b>Share</b>
          </p>
        </footer>
      </div>
    </Modal>
  );
};

export default ModalMentorado;
