import React from 'react';
import PaletteBlock from './paletteBlock';

export default function ColorScheme({ scheme }) {
  return (
    <div className='ColorScheme'>
      {/* <PaletteBlock key={scheme} color={scheme} /> */}
      {scheme.map((rgb, i) => (
        <PaletteBlock key={i} color={rgb} />
      ))}
    </div>
  );
}
