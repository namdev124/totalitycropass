// components/PropertyListings.js
import React, { useState } from 'react';
import Filter from '../Filter';
import PropertyCard from '../PropertyCard';

function PropertyListings({ properties, setProperties }) {
  const [filters, setFilters] = useState({
    location: '',
    priceRange: '',
    bedrooms: '',
    amenities: []
  });

  // Filter properties based on the applied filters
  const filteredProperties = properties.filter(property => {
    // Apply filter logic based on filters state
    // You can customize this logic as per your requirements
    return (
      property.location.includes(filters.location) &&
      property.price <= parseInt(filters.priceRange) &&
      (filters.bedrooms === '' || property.bedrooms === parseInt(filters.bedrooms)) &&
      filters.amenities.every(amenity => property.amenities.includes(amenity))
    );
  });

  return (
    <div>
      <h2>Property Listings</h2>
      <Filter filters={filters} setFilters={setFilters} />
      <div className="property-listings">
        {filteredProperties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default PropertyListings;
