import React from 'react';
import './App.css';
import ColorScheme from './components/colorScheme';
import Navbar from './components/navbar';
import Controlbar from './components/controlBar';
import Footer from './components/footer';

function App({ onHandleSpaceBar }) {
  // const [scheme, setScheme] = React.useState([
  //   [188, 182, 255],
  //   [184, 225, 255],
  //   [169, 255, 247],
  //   [148, 251, 171],
  //   [130, 171, 161],
  // ]);
  const [scheme, setScheme] = React.useState([
    { id: 1, color: [188, 182, 255], isToggled: false, input: 'N' },
    { id: 2, color: [184, 225, 255], isToggled: false, input: 'N' },
    { id: 3, color: [169, 255, 247], isToggled: false, input: 'N' },
    { id: 4, color: [148, 251, 171], isToggled: false, input: 'N' },
    { id: 5, color: [130, 171, 161], isToggled: false, input: 'N' },
  ]);
  // const [inputColors, setInputColors] = React.useState([
  //   'N',
  //   'N',
  //   'N',
  //   'N',
  //   'N',
  // ]);
  const [mode, setMode] = React.useState('light');
  const [history, setHistory] = React.useState([scheme]);

  function handleHistoryUpdate(newScheme) {
    const updatedHistory = [...history, newScheme];
    setHistory(updatedHistory);
  }

  function getSchemes() {
    var url = 'http://colormind.io/api/';

    (async () => {
      const rawResponse = await fetch(url, {
        method: 'POST',

        body: JSON.stringify({
          model: 'default',
          input: scheme.map((element) => element.input),
        }),
      });
      const content = await rawResponse.json();
      const resScheme = content.result;
      handleHistoryUpdate(resScheme);
      const newScheme = [];
      for (const [index, value] of scheme.entries()) {
        value.color = resScheme[index];
        newScheme.push(value);
      }
      setScheme(newScheme);
    })();
  }

  function getPreviousScheme() {
    const prevSchemeIndex = history.indexOf(scheme);
    if (prevSchemeIndex > 0) {
      setScheme(history[prevSchemeIndex - 1]);
    }
  }

  function getNextScheme() {
    const prevSchemeIndex = history.indexOf(scheme);
    if (prevSchemeIndex < history.length - 1) {
      setScheme(history[prevSchemeIndex + 1]);
    }
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
  return (
    <div className={toggleClass('App')}>
      <Navbar mode={mode} onToggle={handleToggle} />
      <Controlbar
        onGetScheme={getSchemes}
        onGetPreviousScheme={getPreviousScheme}
        onGetNextScheme={getNextScheme}
        mode={mode}
      />
      <ColorScheme scheme={scheme} mode={mode} onToggle={handleToggle} />
      <Footer />
    </div>
  );
}

export default App;
