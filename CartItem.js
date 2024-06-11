import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementAmount, decrementAmount } from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementAmount(item.id));
  };

  const handleDecrement = () => {
    dispatch(decrementAmount(item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.img} alt={item.title} className="cart-item-img" />
      <div className="cart-item-info">
        <div className="cart-item-details">
          <h4>{item.title}</h4>
          <p>{item.singer}</p>
        </div>
        <p>{item.price} KRW</p>
      </div>
      <div className="cart-item-amount">
        <button onClick={handleIncrement} className="cart-item-button">
          ^
        </button>
        <p>{item.amount}</p>
        <button onClick={handleDecrement} className="cart-item-button">
          v
        </button>
      </div>
    </div>
  );
};

export default CartItem;
