import React from 'react';
import BackArrow from '../images/arrow-left.svg';
import ForwardArrow from '../images/arrow-right.svg';
import Shuffle from '../images/shuffle.svg';

export default function ControllBar({ onGetScheme }) {
  return (
    <div className='ControllBar'>
      <button className='GenerateBtn' onClick={onGetScheme}>
        GENERATE
        <img src={Shuffle} alt='forward-arrow' />
      </button>
      <div className='arrowControl'>
        <img src={BackArrow} alt='back-arrow' />
        <img src={ForwardArrow} alt='forward-arrow' />
      </div>
    </div>
  );
}
