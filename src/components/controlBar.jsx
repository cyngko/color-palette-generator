import React from 'react';
import Shuffle from '../images/shuffle.svg';

export default function ControllBar({ onGetScheme, mode }) {
  const borderStyles =
    mode === 'light'
      ? { borderRight: '2px solid #ddd', borderLeft: '2px solid #ddd' }
      : { borderRight: '2px solid #888', borderLeft: '2px solid #888' };
  return (
    <div className='ControlBar'>
      <button className='GenerateBtn' onClick={onGetScheme}>
        Generate
        <img id='generateIcon' src={Shuffle} alt='forward-arrow' />
      </button>
    </div>
  );
}
