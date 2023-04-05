import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from '../Modal/Modal.module.css';

const Modal = ({ largeImage, toogleModal, onModal }) => {
  const modalRef = useRef(document.querySelector('#modal-root'));

  useEffect(() => {
    const onKeyDown = e => {
      if (e.code === 'Escape') {
        toogleModal();
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return window.removeEventListener('keydown', onKeyDown);
  }, [toogleModal]);

  return createPortal(
    <div className={s.modal} onClick={onModal}>
      <div className={s.modal_img}>
        <img src={largeImage} alt="" />
      </div>
    </div>,
    modalRef.current
  );
};

Modal.propTypes = {
  onModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};

export default Modal;
