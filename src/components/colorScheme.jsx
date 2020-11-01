import React from 'react';
import PaletteBlock from './paletteBlock';

export default function ColorScheme({ scheme, mode, onToggle }) {
  return (
    <div className='ColorScheme'>
      {/* <PaletteBlock key={scheme} color={scheme} /> */}
      {scheme.map((rgb, i) => (
        <PaletteBlock key={i} color={rgb} mode={mode} onToggle={onToggle} />
      ))}
    </div>
  );
}
