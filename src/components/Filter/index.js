// components/Filter.js
import React from 'react';

function Filter({ filters, setFilters }) {
  // Handle filter change events and update filters state
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="filter">
      <input type="text" name="location" value={filters.location} onChange={handleFilterChange} placeholder="Location" />
      {/* Add more filter inputs as needed */}
    </div>
  );
}

export default Filter;
