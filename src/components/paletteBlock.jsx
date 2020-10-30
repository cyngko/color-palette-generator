import React from 'react';

export default function PaletteBlock({ color }) {
  const getHexColor = () => {
    let hex = '';
    for (let num of color) {
      hex = hex + num.toString(16);
    }
    return hex.toUpperCase();
  };
  return (
    <div className='PaletteBlock'>
      <div
        className='ColorBlock'
        style={{
          background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
        }}></div>
      {/* <p className='colorName'>{`rgb(${color[0]}, ${color[1]}, ${color[2]})`}</p> */}
      <p className='colorName'>{`#${getHexColor()}`}</p>
    </div>
  );
}
