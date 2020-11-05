import React from 'react';
import './App.css';
import ColorScheme from './components/colorScheme';
import Navbar from './components/navbar';
import Controlbar from './components/controlBar';
import Footer from './components/footer';

function App() {
  const [scheme, setScheme] = React.useState({
    color: [
      { id: 1, color: [188, 182, 255], isToggled: false, input: 'N' },
      { id: 2, color: [184, 225, 255], isToggled: false, input: 'N' },
      { id: 3, color: [169, 255, 247], isToggled: false, input: 'N' },
      { id: 4, color: [148, 251, 171], isToggled: false, input: 'N' },
      { id: 5, color: [130, 171, 161], isToggled: false, input: 'N' },
    ],
  });
  const [mode, setMode] = React.useState('light');

  function getSchemes() {
    var url = 'http://colormind.io/api/';

    (async () => {
      const rawResponse = await fetch(url, {
        method: 'POST',

        body: JSON.stringify({
          model: 'default',
          input: scheme.color.map((element) => element.input),
        }),
      });
      const content = await rawResponse.json();
      const resScheme = content.result;
      const newScheme = [];
      for (const [index, value] of scheme.color.entries()) {
        value.isToggled
          ? (value.color = scheme.color[index].color)
          : (value.color = resScheme[index]);
        newScheme.push(value);
      }
      setScheme({
        color: newScheme,
      });
    })();
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

  return (
    <div className={toggleClass('App')}>
      <Navbar mode={mode} onToggle={handleToggle} />
      <Controlbar onGetScheme={getSchemes} mode={mode} />
      <ColorScheme
        scheme={scheme.color}
        mode={mode}
        onHandleLock={handleLock}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
      />
      <Footer />
    </div>
  );
}

export default App;
