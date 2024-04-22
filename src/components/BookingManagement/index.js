// components/BookingManagement.js
import React, { useState } from 'react';
import CartItem from '../CartItem';

function BookingManagement({ properties }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (property) => {
    setCartItems(prevCartItems => [...prevCartItems, property]);
  };

  const removeFromCart = (propertyId) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== propertyId));
  };

  return (
    <div>
      <h2>Booking Management</h2>
      <div className="cart">
        <h3>Cart</h3>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))}
      </div>
      <div className="property-listings">
        {properties.map(property => (
          <button key={property.id} onClick={() => addToCart(property)}>Book Now</button>
        ))}
      </div>
    </div>
  );
}

export default BookingManagement;
