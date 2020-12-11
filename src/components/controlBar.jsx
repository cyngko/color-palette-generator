import React from 'react';

export default function ControllBar({ onGetScheme, mode }) {
  return (
    <div className='ControlBar'>
      <p className='generateMessage'>
        Click the button or hit the spacebar to start the generator!
      </p>
      <button className='GenerateBtn' onClick={onGetScheme}>
        Generate new scheme
      </button>
    </div>
  );
}
