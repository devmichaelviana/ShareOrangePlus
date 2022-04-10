import React, { useState } from 'react';
import ModalMentor from '../../components/ModalMentor';
import ModalMentorInformacoes from '../../components/ModalMentorInformacoes';
import ModalMentorado from '../../components/ModalMentorado';

function ModalExemplos() {
  const [modal, setModal] = useState(false);
  const [modalMentor, setModalMentor] = useState(false);
  const [modalMentorado, setModalMentorado] = useState(false);

  return (
    <>
      <main>
        <h1>React Modal</h1>
        <ModalMentorInformacoes modal={modal} setModal={setModal} />
        <ModalMentorado
          modalMentorado={modalMentorado}
          setModalMentorado={setModalMentorado}
        />
        <ModalMentor
          modalMentor={modalMentor}
          setModalMentor={setModalMentor}
        />

        <button type="button" onClick={() => setModal(true)}>
          Modal Informações
        </button>
        <button type="button" onClick={() => setModalMentorado(true)}>
          Modal Mentorado
        </button>
        <button type="button" onClick={() => setModalMentor(true)}>
          Modal Mentor
        </button>
      </main>
    </>
  );
}

export default ModalExemplos;
