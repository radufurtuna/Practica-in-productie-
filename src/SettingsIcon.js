import React from 'react';
import { AiFillSetting } from 'react-icons/ai'; 

function SettingsIcon( ) {
      const handleClick = () => {
    console.log('Iconița a fost apăsată!');

  };

  return (
    <AiFillSetting className="search-icon" onClick={handleClick} />
  );
}

export default SettingsIcon;