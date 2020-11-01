import React from 'react';
import Github from '../images/github.svg';

export default function Footer() {
  return (
    <div className='Footer'>
      <a href='https://github.com/cyngko' rel='noreferrer' target='_blank'>
        <div className='footerContainer'>
          <p>Coded with love by Cyngko</p>
          <img src={Github} alt='github-icon' />
        </div>
      </a>
    </div>
  );
}
