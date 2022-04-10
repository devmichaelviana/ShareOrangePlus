import React from 'react';
import Modal from '../Modal';
import imgMentorado from '../../assets/mentor.png';
import './style.css';

const ModalMentor = ({ modalMentor, setModalMentor }) => {
  return (
    <Modal isOpen={modalMentor} onClose={() => setModalMentor(false)}>
      <div className="containerModal">
        <div className="wrapperModal">
          <h2 className="tituloModal">
            <p className="textDestaque">
              Amplie seu conhecimento, <br />
            </p>
            entre em contato com outros profissionais
          </h2>
          <p className="descricaoModal">
            Habilite essa opção na página de seu perfil
          </p>

          <img className="imgCenterModal" src={imgMentorado} alt="" />

          <div className="containerBtns">
            <button
              className="buttonHabilitar"
              type="button"
              onClick={() => setModalMentor(false)}
            >
              Habilitar
            </button>
            <button
              className="buttonAgoraNao"
              type="button"
              onClick={() => setModalMentor(false)}
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

export default ModalMentor;
