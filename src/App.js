import './App.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setExchangeInfo, getPairsWithKlines, clearPairsAndKlines } from './store/action/binance';
import Table from './components/Table/Table';
import loader from '../src/assets/loading.gif';

function App() {
  const dispatch = useDispatch();
  const [asset, setAsset] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const pairs = useSelector(state => state.dataFromBinance.klines);


  useEffect(() => {
    dispatch(setExchangeInfo());
  }, [dispatch]);



  const getPairsAndKlines =  async () => {
    setLoading(true)
    await dispatch(clearPairsAndKlines());
    await dispatch(getPairsWithKlines(asset));
    setLoading(false)
  }

  return (
    <div className="app">
      <div className="tool-container">
        <input placeholder="Enter the asset" className="asset-input" onChange={(e) => setAsset(e.target.value.toLocaleUpperCase())} />
        <button disabled={!asset} className="pair-btn" onClick={getPairsAndKlines}>Get Pairs</button>
      </div>
      {!loading ? <Table pairs={pairs} /> : <img className="loader" src={loader}></img>}
    </div>
  )
};

export default App;
