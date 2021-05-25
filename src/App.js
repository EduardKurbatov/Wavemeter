import './App.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setExchangeInfo, setKlines, getWaves } from './store/action/binance';

function App() {
  const dispatch = useDispatch();
  const [asset, setAsset] = useState(undefined)

  useEffect(() => {
    dispatch(setExchangeInfo())
  }, [dispatch]);

  return (
    <div className="app">
      <input placeholder="Enter the asset" className="asset-input" onChange={(e) => setAsset(e.target.value.toLocaleUpperCase())}></input>
      <button className="get-klines-btn" onClick={() => {dispatch(setKlines(asset))}}>Get pairs</button>
    </div>
  )
};

export default App;
