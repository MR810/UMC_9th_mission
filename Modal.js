import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../redux/modalSlice';
import { clearCart } from '../redux/cartSlice';

const Modal = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h4>담아두신 모든 음반을 삭제하시겠습니까?</h4>
        <div className="modal-buttons">
          <button onClick={handleClearCart}>네</button>
          <button onClick={handleClose}>아니요</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
