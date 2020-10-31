import React from 'react';
import './App.css';
import ColorScheme from './components/colorScheme';
import Navbar from './components/navbar';
import Controlbar from './components/controlBar';

function App({ onHandleSpaceBar }) {
  const [scheme, setScheme] = React.useState([
    [188, 182, 255],
    [184, 225, 255],
    [169, 255, 247],
    [148, 251, 171],
    [130, 171, 161],
  ]);
  const [mode, setMode] = React.useState('light');

  function getSchemes() {
    var url = 'http://colormind.io/api/';

    (async () => {
      const rawResponse = await fetch(url, {
        method: 'POST',

        body: JSON.stringify({
          model: 'default',
        }),
      });
      const content = await rawResponse.json();

      setScheme(content.result);
    })();
  }

  function toggleClass() {
    const baseClass = 'App ';
    const classList = baseClass + (mode === 'light' ? 'light' : 'dark');
    return classList;
  }
  function handleToggle() {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
  }
  return (
    <div className={toggleClass()}>
      <Navbar onGetScheme={getSchemes} mode={mode} onToggle={handleToggle} />
      <Controlbar onGetScheme={getSchemes} />
      <ColorScheme scheme={scheme} />
    </div>
  );
}

export default App;
