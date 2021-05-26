import './App.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setExchangeInfo, getKlines, getPairsWithKlines } from './store/action/binance';

function App() {
  const dispatch = useDispatch();
  const [asset, setAsset] = useState(undefined);

  useEffect(() => {
    dispatch(setExchangeInfo());
  }, [dispatch]);


  const getPairsAndKlines = () => {
    dispatch(getPairsWithKlines(asset));
  }

  return (
    <div className="app">
      <input placeholder="Enter the asset" className="asset-input" onChange={(e) => setAsset(e.target.value.toLocaleUpperCase())} />
      <button disabled={!asset} className="get-pairs-klines-btn" onClick={getPairsAndKlines}>Get Pairs With Klines</button>
    </div>
  )
};

export default App;
