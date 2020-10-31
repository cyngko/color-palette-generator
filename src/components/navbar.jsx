import React from 'react';
import Moon from '../images/moon.svg';
import Sun from '../images/sun.svg';
import Github from '../images/github.svg';

export default function Navbar({ onGetScheme, mode, onToggle }) {
  return (
    <div className='Navbar'>
      <h2 className='logo'>COLYNGKO</h2>
      {/* <button className='GenerateBtn' onClick={onGetScheme}>
        Generate
      </button> */}
      <div className='navbar-icons'>
        <a href='https://github.com/cyngko' rel='noreferrer' target='_blank'>
          <img src={Github} alt='github-icon' />
        </a>

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
