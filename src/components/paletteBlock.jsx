import React from 'react';

export default function PaletteBlock({ color }) {
  const getHexColor = () => {
    let hex = '';
    for (let num of color) {
      const hexFract =
        num.toString(16).length === 1 ? 0 + num.toString(16) : num.toString(16);
      hex = hex + hexFract;
    }
    return hex.toUpperCase();
  };
  function getFontColor(color) {
    let sum = 0;
    for (let v of color) {
      sum += v;
    }
    return 765 / 2 > sum ? '#eee' : '#111';
  }
  return (
    <div className='PaletteBlock'>
      <div
        className='ColorBlock'
        style={{
          background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
        }}>
        <div
          className='colorName'
          style={{ color: getFontColor(color) }}>{`#${getHexColor()}`}</div>
      </div>
      {/* <p className='colorName'>{`rgb(${color[0]}, ${color[1]}, ${color[2]})`}</p> */}
    </div>
  );
}
