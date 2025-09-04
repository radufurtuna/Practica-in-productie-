import React from 'react';
import SettingsIcon from './SettingsIcon'; 

function SearchBar({ searchTerm, setSearchTerm }) {

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Caută după model..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <SettingsIcon /> {/* Iconița */}
    </div>
  );
}

export default SearchBar;