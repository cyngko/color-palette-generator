import React from 'react';

export default function Navbar({ onGetScheme }) {
  return (
    <div className='Navbar'>
      <h2 className='logo'>COLYNGKO</h2>
      <button className='GenerateBtn' onClick={onGetScheme}>
        Generate
      </button>
    </div>
  );
}
