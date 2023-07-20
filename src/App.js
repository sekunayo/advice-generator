import { useEffect, useState } from 'react';
import './App.css';
import { ReactComponent as Dice } from './icons/dice.svg';
import { ReactComponent as Pause } from './icons/pause.svg';
import { handleFetchData } from './utils/helpers';

function App() {
  const [result, setResult] = useState({});

  const handleRefetch = () => {
    handleFetchData("https://api.adviceslip.com/advice").then((response) => setResult(response))
  }

  useEffect(() => {
    handleFetchData("https://api.adviceslip.com/advice").then((response) => setResult(response))
  }, [])



  return (
    <div className="app">
      <div className="app__advice">
        <h6 className='app__advice-heading'>ADVICE #{result?.slip?.id}</h6>
        <p className='app__advice-paragraph'>{result?.slip?.advice}</p>
        <div className="app__advice-horizontal-line-grid">
          <span className="app__advice-horizontal-line"></span>
          <Pause />
          <span className="app__advice-horizontal-line"></span>
        </div>
        <button onClick={handleRefetch} type="button" className="app__advice-logo">
          <Dice />
        </button>

      </div>
    </div>
  );
}

export default App;
