import React from 'react';

export default function PaletteBlock({ color }) {
  return (
    <div className='PaletteBlock'>
      <div
        className='ColorBlock'
        style={{
          background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
        }}></div>
      <p className='rgbName'>{`rgb(${color[0]}, ${color[1]}, ${color[2]})`}</p>
    </div>
  );
}
