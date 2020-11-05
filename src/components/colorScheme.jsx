import React from 'react';
import PaletteBlock from './paletteBlock';
import CopyConfirmation from './copyConfirmation';

export default function ColorScheme({ scheme, onHandleLock }) {
  function copyColor(i) {
    const copyColor = document.querySelector(`#color_${i}`);
    /* Select the text field */
    copyColor.select();
    copyColor.setSelectionRange(0, 99999); /*For mobile devices*/
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
      {scheme.map((el, i) => (
        <PaletteBlock
          key={el.id}
          id={el.id}
          isLocked={el.isToggled}
          color={el.color}
          onCopy={copyColor}
          onHandleLock={onHandleLock}
        />
      ))}
      <CopyConfirmation />
    </div>
  );
}
