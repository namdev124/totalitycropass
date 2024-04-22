// components/BookingForm.js
import React, { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkInDate: '',
    checkOutDate: '',
    numGuests: ''
  });

  // Handle form input change events and update formData state
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement booking process logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
      <input type="date" name="checkInDate" value={formData.checkInDate} onChange={handleChange} placeholder="Check-in Date" required />
      <input type="date" name="checkOutDate" value={formData.checkOutDate} onChange={handleChange} placeholder="Check-out Date" required />
      <input type="number" name="numGuests" value={formData.numGuests} onChange={handleChange} placeholder="Number of Guests" required />
      <button type="submit">Submit Booking</button>
    </form>
  );
}

export default BookingForm;
