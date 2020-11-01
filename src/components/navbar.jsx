import React from 'react';
import Moon from '../images/moon.svg';
import Sun from '../images/sun.svg';

export default function Navbar({ onGetScheme, mode, onToggle }) {
  return (
    <div className='Navbar'>
      <h2 className='logo'>COLYNGKO</h2>
      {/* <button className='GenerateBtn' onClick={onGetScheme}>
        Generate
      </button> */}
      <div className='navbar-icons'>
        <img
          className='modeIcon'
          src={mode === 'light' ? Moon : Sun}
          alt='modeToggle-icon'
          onClick={onToggle}
        />
      </div>
    </div>
  );
}
