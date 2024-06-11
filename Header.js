import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from '../redux/cartSlice';
import { CartIcon } from '../constants/icons';
import Modal from './Modal';

const Header = () => {
  const dispatch = useDispatch();
  const totalItems = useSelector(state => state.cart.totalItems);
  const isModalOpen = useSelector(state => state.modal.isModalOpen);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch]);

  return (
    <header className="App-header">
      <div className="header-content">
        <div className="header-left">
          <h1>UMC PlayList</h1>
        </div>
        <div className="header-right">
          <CartIcon />
          <span className="cart-count">{totalItems}</span>
        </div>
      </div>
      {isModalOpen && <Modal />}
    </header>
  );
};

export default Header;
