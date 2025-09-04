import React, { useState } from 'react';
import { AiFillSetting } from 'react-icons/ai'; // Importăm iconița
import FilterContainer from './FilterContainer'; // Importăm componenta pentru filtre
//import './SettingsIcon.css';

function SettingsIcon({ onFilterChange }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Starea pentru deschiderea/închiderea containerului

  const handleClick = () => {
    setIsFilterOpen(!isFilterOpen); // Deschide/închide containerul
  };

  return (
    <div className="settings-icon-container">
      <AiFillSetting className="search-icon" onClick={handleClick} />
      {isFilterOpen && <FilterContainer onFilterChange={onFilterChange} />}
    </div>
  );
}

export default SettingsIcon;