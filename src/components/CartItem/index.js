// components/CartItem.js
import React from 'react';

function CartItem({ item, removeFromCart }) {
  return (
    <div className="cart-item">
      <h4>{item.title}</h4>
      <p>Price: ${item.price}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
