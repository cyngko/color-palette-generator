import React from 'react';
import './App.css';
import ColorScheme from './components/colorScheme';

function App() {
  const [scheme, setScheme] = React.useState([
    [211, 38, 67],
    [250, 72, 31],
    [214, 170, 50],
    [97, 142, 111],
    [48, 138, 109],
  ]);
  function colormind() {
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

  return (
    <div className='App'>
      <ColorScheme scheme={scheme} />
      <button className='GenerateBtn' onClick={colormind}>
        Generate
      </button>
    </div>
  );
}

export default App;
