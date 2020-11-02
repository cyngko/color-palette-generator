import React from 'react';
import PaletteBlock from './paletteBlock';
import CopyConfirmation from './copyConfirmation';

export default function ColorScheme({ scheme, mode, onToggle }) {
  function copyColor(i) {
    const copyColor = document.querySelectorAll('.copyColor');
    /* Select the text field */
    copyColor[i].select();
    copyColor[i].setSelectionRange(0, 99999); /*For mobile devices*/
    if (document.execCommand('copy')) {
      document.querySelector('.CopyConfirmation').style.top = '5%';
      document.querySelector('.CopyConfirmation').style.opacity = '1';
      setTimeout(() => {
        document.querySelector('.CopyConfirmation').style.top = '-5%';
        document.querySelector('.CopyConfirmation').style.opacity = '0';
      }, 2000);
    }
  }
  return (
    <div className='ColorScheme'>
      {scheme.map((rgb, i) => (
        <PaletteBlock
          key={i}
          id={i}
          color={rgb}
          onToggle={onToggle}
          onCopy={copyColor}
        />
      ))}
      <CopyConfirmation />
    </div>
  );
}
