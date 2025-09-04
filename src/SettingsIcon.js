import React from 'react';
import { AiFillSetting } from 'react-icons/ai'; // Importăm iconița

function SettingsIcon( ) {
      const handleClick = () => {
    console.log('Iconița a fost apăsată!');
    // Adaugă aici funcționalitatea dorită pentru iconiță
  };

  return (
    <AiFillSetting className="search-icon" onClick={handleClick} />
  );
}

export default SettingsIcon;