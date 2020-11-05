import React from 'react';

export default function ControllBar({ onGetScheme, mode }) {
  return (
    <div className='ControlBar'>
      <button className='GenerateBtn' onClick={onGetScheme}>
        Generate
      </button>
    </div>
  );
}
