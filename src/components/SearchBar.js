import React from 'react';
import { AiFillSetting } from 'react-icons/ai';

function SearchBar({ searchTerm, setSearchTerm, onToggleFilters }) {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Caută după model..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      {/* Iconița de setări */}
      <AiFillSetting className="search-icon" onClick={onToggleFilters} />
    </div>
  );
}

export default SearchBar;
