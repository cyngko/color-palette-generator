import React from 'react';

export default function ColorPicker({ color, id, onColorChange }) {
  return (
    <div
      className='ColorPicker'
      id={`colorPicker_${id}`}
      onClick={(e) => {
        e.stopPropagation(); // pop-up will not disappear when clicking on the element.
        return false;
      }}>
      <div className='popUpContent'>
        <p>Change color</p>
        <input
          type='color'
          name='colorPicker'
          id={`colorPickerInput_${id}`}
          value={`#${color}`}
          onChange={onColorChange}
        />
      </div>
    </div>
  );
}
