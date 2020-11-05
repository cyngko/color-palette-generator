import React from 'react';

export default function PaletteBlock({
  color,
  onCopy,
  id,
  onHandleLock,
  isLocked,
  onDragStart,
  onDrop,
  onDragOver,
  position,
  dragAndDrop,
}) {
  const getHexColor = () => {
    let hex = '';
    for (let num of color) {
      const hexFract =
        num.toString(16).length === 1 ? 0 + num.toString(16) : num.toString(16);
      hex = hex + hexFract;
    }
    return hex.toUpperCase();
  };

  function getContrastClass(color) {
    let sum = 0;
    for (let v of color) {
      sum += v;
    }
    return 765 / 2 > sum ? 'lightContrast' : 'darkContrast';
  }
  //   function copyColor() {
  //     const copyColor = document.querySelector('.copyColor');
  //     /* Select the text field */
  //     copyColor.select();
  //     copyColor.setSelectionRange(0, 99999); /*For mobile devices*/
  //     document.execCommand('copy');

  //     /* Alert the copied text */
  //     alert('Copied the text: ' + copyColor.value);
  //   }
  const lock = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      onClick={() => onHandleLock(id)}
      className={getContrastClass(color)}>
      <rect x='3' y='11' width='18' height='11' rx='2' ry='2'></rect>
      <path d='M7 11V7a5 5 0 0 1 10 0v4'></path>
    </svg>
  );
  const copy = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      onClick={() => onCopy(id)}
      className={getContrastClass(color)}>
      <rect x='9' y='9' width='13' height='13' rx='2' ry='2'></rect>
      <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'></path>
    </svg>
  );
  const move = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={getContrastClass(color)}>
      <polyline points='5 9 2 12 5 15'></polyline>
      <polyline points='9 5 12 2 15 5'></polyline>
      <polyline points='15 19 12 22 9 19'></polyline>
      <polyline points='19 9 22 12 19 15'></polyline>
      <line x1='2' y1='12' x2='22' y2='12'></line>
      <line x1='12' y1='2' x2='12' y2='22'></line>
    </svg>
  );
  return (
    <div
      className={`PaletteBlock ${
        dragAndDrop && dragAndDrop.draggedTo === Number(position)
          ? 'dropArea'
          : ''
      }`}
      draggable='true'
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      data-position={position}>
      <div
        className='ColorBlock'
        style={{
          background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
        }}>
        <div className='colorBlockControls'>
          <i>{move}</i>
          <i>{copy}</i>
          <i
            id={`lock_${id}-${isLocked}`}
            style={{ opacity: isLocked ? 1 : null }}>
            {lock}
          </i>
        </div>
        {/* <div
          className={`colorName ${getContrastClass(
            color
          )}`}>{`${getHexColor()}`}</div> */}
        <input
          id={`color_${id}`}
          type='text'
          value={getHexColor()}
          className={`copyColor ${getContrastClass(color)}`}
          readOnly
        />
      </div>
      {/* <p className='colorName'>{`rgb(${color[0]}, ${color[1]}, ${color[2]})`}</p> */}
    </div>
  );
}
