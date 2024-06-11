import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './components/CartItem';
import Header from './components/Header';
import { openModal } from './redux/modalSlice';

function App() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleResetCart = () => {
    dispatch(openModal());
  };

  const totalPrice = useSelector(state => state.cart.totalPrice);

  return (
    <div className="App">
      <Header />
      <h1>당신이 선택한 음반</h1>
      <div className="cart-items">
        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <p>총 가격: {totalPrice} KRW</p>
        <button onClick={handleResetCart} className="reset-cart-button">장바구니 초기화</button>
      </div>
    </div>
  );
}

export default App;

