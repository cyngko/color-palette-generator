import React from 'react';
import './App.css';
import ColorScheme from './components/colorScheme';
import Navbar from './components/navbar';
import Controlbar from './components/controlBar';
import Footer from './components/footer';

function App() {
  const getNum = () => Math.floor(Math.random() * 256);
  const [scheme, setScheme] = React.useState({
    color: [
      {
        id: 1,
        color: [getNum(), getNum(), getNum()],
        isToggled: false,
        input: 'N',
      },
      {
        id: 2,
        color: [getNum(), getNum(), getNum()],
        isToggled: false,
        input: 'N',
      },
      {
        id: 3,
        color: [getNum(), getNum(), getNum()],
        isToggled: false,
        input: 'N',
      },
      {
        id: 4,
        color: [getNum(), getNum(), getNum()],
        isToggled: false,
        input: 'N',
      },
      {
        id: 5,
        color: [getNum(), getNum(), getNum()],
        isToggled: false,
        input: 'N',
      },
    ],
  });
  const [mode, setMode] = React.useState('light');

  function getSchemes() {
    const newScheme = [];
    for (const [index, value] of scheme.color.entries()) {
      value.isToggled
        ? (value.color = scheme.color[index].color)
        : (value.color = [getNum(), getNum(), getNum()]);
      newScheme.push(value);
    }
    setScheme({
      color: newScheme,
    });
    // var url = 'http://colormind.io/api/';

    //   (async () => {
    //     const rawResponse = await fetch(url, {
    //       method: 'POST',

    //       body: JSON.stringify({
    //         model: 'default',
    //         input: scheme.color.map((element) => element.input),
    //       }),
    //     });
    //     const content = await rawResponse.json();
    //     const resScheme = content.result;
    //     const newScheme = [];
    //     for (const [index, value] of scheme.color.entries()) {
    //       value.isToggled
    //         ? (value.color = scheme.color[index].color)
    //         : (value.color = resScheme[index]);
    //       newScheme.push(value);
    //     }

    //     setScheme({
    //       color: newScheme,
    //     });
    //   })();
  }

  function toggleClass(base) {
    const baseClass = base;
    const classList = baseClass + (mode === 'light' ? ' light' : ' dark');
    return classList;
  }
  function handleToggle() {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
  }
  function handleLock(id) {
    const newScheme = scheme.color.map((c) =>
      c.id === id
        ? {
            ...c,
            isToggled: c.isToggled === false ? true : false,
            // color: c.color,
            input: c.isToggled === false ? c.color : 'N',
          }
        : c
    );
    setScheme({
      color: newScheme,
    });
  }

  // MOVE COLOR BLOCKS

  // Drag n Drop

  const initialDnDState = {
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
    originalOrder: [],
    updatedOrder: [],
  };
  const [dragAndDrop, setDragAndDrop] = React.useState(initialDnDState);

  const onDragStart = (e) => {
    const initialPosition = Number(e.currentTarget.dataset.position);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: scheme.color,
    });
    e.dataTransfer.setData('text/html', '');
  };
  const onDragOver = (e) => {
    e.preventDefault();
    let newList = dragAndDrop.originalOrder;

    const draggedFrom = dragAndDrop.draggedFrom;

    const draggedTo = Number(e.currentTarget.dataset.position);

    const itemDragged = newList[draggedFrom];

    const remainingItems = newList.filter(
      (item, index) => index !== draggedFrom
    );

    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];

    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,

        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  };
  const onDrop = (e) => {
    setScheme({ color: dragAndDrop.updatedOrder });

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    });
  };

  // Move Blocks on Mobile with click
  const changeBlockPosition = (arr, init, target) => {
    [arr[init], arr[target]] = [arr[target], arr[init]];
    return arr;
  };

  const onMoveUp = (position) => {
    const movedFrom = Number(position);
    const movedTo = movedFrom - 1;
    const newOrder = changeBlockPosition(scheme.color, movedFrom, movedTo);
    setScheme({ color: newOrder });
  };
  const onMoveDown = (position) => {
    const movedFrom = Number(position);

    const movedTo = movedFrom + 1;

    const newOrder = changeBlockPosition(scheme.color, movedFrom, movedTo);
    setScheme({ color: newOrder });
  };

  // Color Input

  const onColorChange = (e) => {
    const newHex = e.target.value;
    const r = parseInt(`0x${newHex.substring(1, 3)}`);
    const g = parseInt(`0x${newHex.substring(3, 5)}`);
    const b = parseInt(`0x${newHex.substring(5, 7)}`);
    const newRGB = [r, g, b];
    const updatedScheme = scheme.color.map((c) =>
      e.target.id === `colorPickerInput_${c.id}`
        ? {
            ...c,
            color: newRGB,
          }
        : c
    );
    setScheme({
      color: updatedScheme,
    });
  };

  // Color Picker
  const [isPopUpOpen, setIsPopUpOpen] = React.useState(false);

  const hideColorPicker = () => {
    const colorPicker = document.querySelectorAll('.ColorPicker');
    for (let popup of colorPicker) {
      if (popup.style.display === 'block') {
        popup.style.display = 'none';
      }
    }
    setIsPopUpOpen(false);
  };
  const showColorPicker = (id) => {
    const colorPicker = document.querySelector(`#colorPicker_${id}`);
    console.log(`#colorPicker_${id}`);
    colorPicker.style.display = 'block';
    setIsPopUpOpen(true);
  };

  return (
    <div
      className={toggleClass('App')}
      onClick={isPopUpOpen ? () => hideColorPicker() : null}>
      <Navbar mode={mode} onToggle={handleToggle} />
      <Controlbar onGetScheme={getSchemes} mode={mode} />
      <ColorScheme
        scheme={scheme.color}
        mode={mode}
        onHandleLock={handleLock}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
        dragAndDrop={dragAndDrop}
        onMoveUp={onMoveUp}
        onMoveDown={onMoveDown}
        onColorChange={onColorChange}
        onShowColorPicker={showColorPicker}
      />
      <Footer />
    </div>
  );
}

export default App;
