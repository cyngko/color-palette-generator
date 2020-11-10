import React from 'react';

export default function ControllBar({ onGetScheme, mode }) {
  return (
    <div className='ControlBar'>
      <button className='GenerateBtn' onClick={onGetScheme}>
        Generate
      </button>
      <p className='generateMessage'>
        Hit the spacebar to start the generator!
      </p>
    </div>
  );
}
