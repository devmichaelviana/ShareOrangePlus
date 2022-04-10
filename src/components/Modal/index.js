import React from 'react';
import './style.css';

const Modal = ({ children, isOpen, onClose }) => {
  const showHideClassName = isOpen ? 'ui-modal__overlay ' : 'display-none';

  return (
    <div className={showHideClassName}>
      <div className="ui-modal">{children}</div>
    </div>
  );
};

export default Modal;
