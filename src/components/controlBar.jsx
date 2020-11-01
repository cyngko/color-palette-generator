import React from 'react';
import BackArrow from '../images/arrow-left.svg';
import ForwardArrow from '../images/arrow-right.svg';
import Shuffle from '../images/shuffle.svg';

export default function ControllBar({
  onGetScheme,
  onGetPreviousScheme,
  onGetNextScheme,
}) {
  const backArrow = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='#ddd'
      width='18'
      height='18'
      viewBox='0 0 24 24'>
      <path d='M17.026 22.957c10.957-11.421-2.326-20.865-10.384-13.309l2.464 2.352h-9.106v-8.947l2.232 2.229c14.794-13.203 31.51 7.051 14.794 17.675z' />
    </svg>
  );
  const forwardArrow = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='#ddd'
      width='18'
      height='18'
      viewBox='0 0 24 24'>
      <path d='M6.974 22.957c-10.957-11.421 2.326-20.865 10.384-13.309l-2.464 2.352h9.106v-8.947l-2.232 2.229c-14.794-13.203-31.51 7.051-14.794 17.675z' />
    </svg>
  );
  return (
    <div className='ControlBar'>
      <button className='GenerateBtn' onClick={onGetScheme}>
        Generate
        <img src={Shuffle} alt='forward-arrow' />
      </button>
      <div className='arrowControl'>
        <i onClick={onGetPreviousScheme}>{backArrow}</i>
        <i onClick={onGetNextScheme}>{forwardArrow}</i>
      </div>
    </div>
  );
}
