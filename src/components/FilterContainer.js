import React, { useState } from 'react';
import '../style/FilterContainer.css';

function FilterContainer({ onFilterChange }) {
  const [filters, setFilters] = useState({
    title: '',
    content: '',
    additional: '',
    wr: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="filter-container">
      <h3>Filtre</h3>

      <label>
        Marca / Model:
        <input
          type="text"
          name="title"
          value={filters.title}
          onChange={handleFilterChange}
        />
      </label>

      <label>
        Motorizare / Cai putere:
        <input
          type="text"
          name="content"
          value={filters.content}
          onChange={handleFilterChange}
        />
      </label>

      <label>
        Caroserie / Tracțiune:
        <input
          type="text"
          name="additional"
          value={filters.additional}
          onChange={handleFilterChange}
        />
      </label>

      <label>
        Consum:
        <input
          type="text"
          name="wr"
          value={filters.wr}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
}

export default FilterContainer;
