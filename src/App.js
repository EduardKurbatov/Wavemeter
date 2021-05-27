import './App.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setExchangeInfo, getPairsWithKlines, clearPairsAndKlines } from './store/action/binance';

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
      <button disabled={!asset} className="pair-btn" id="get" onClick={getPairsAndKlines}>Get Pairs</button>
      <input placeholder="Enter the asset" className="asset-input" onChange={(e) => setAsset(e.target.value.toLocaleUpperCase())} />
      <button className="pair-btn" id="clear" onClick={() => dispatch(clearPairsAndKlines())}>Сlear Pairs</button>
    </div>
  )
};

export default App;
