import './App.scss';
import { useEffect, useState } from 'react';
import { getAllSymbols } from './utils';

function App() {
  const [allSymbols, setAllSymbols] = useState(null);

  useEffect(() => {
    getAllSymbols(setAllSymbols);
  }, []);

  return (
    <div className="app"></div>
  )
};

export default App;
