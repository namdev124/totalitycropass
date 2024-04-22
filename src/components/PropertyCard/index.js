// components/PropertyCard.js
import React from 'react';

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.description}</p>
      <p>Price: ${property.price}</p>
      <button>Book Now</button>
    </div>
  );
}

export default PropertyCard;
