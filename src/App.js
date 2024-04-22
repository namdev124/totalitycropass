// App.js
import React, { useState } from 'react';
import './App.css';
import PropertyListings from './components/PropertyListings';
import BookingManagement from './components/BookingManagement';
import CheckoutProcess from './components/CheckoutProcess';

function App() {
  const [properties, setProperties] = useState([
    // Array of property objects
    {
      id: 1,
      title: "Beautiful Villa",
      location: "Beachfront",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 200,
      bedrooms: 3,
      amenities: ["WiFi", "Pool"],
      image: "villa-image-url.jpg"
    },
    // More property objects...
  ]);

  return (
    <div className="App">
      <h1>Property Rental Platform</h1>
      <PropertyListings properties={properties} setProperties={setProperties} />
      <BookingManagement properties={properties} />
      <CheckoutProcess />
    </div>
  );
}

export default App;
