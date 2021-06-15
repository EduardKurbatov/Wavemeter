import './App.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setExchangeInfo, getPairsWithKlines, clearPairsAndKlines} from './store/action/binance';
import Table from './containers/Table';
import loader from '../src/assets/loading.gif';
import Select from './components/Select/Select';
import {INTERVALS} from './store/constants';

function App() {
  const dispatch = useDispatch();
  const [asset, setAsset] = useState();
  const [interval, setInterval] = useState(INTERVALS[0]);
  const [limit, setLimit] = useState(1000);
  const [loading, setLoading] = useState(false);
  const pairs = useSelector(state => state.dataFromBinance.klines);

  useEffect(() => {
    dispatch(setExchangeInfo());
  }, [dispatch]);

  const getPairsAndKlines =  async () => {
    setLoading(true)
    await dispatch(clearPairsAndKlines());
    await dispatch(getPairsWithKlines(asset, interval, limit));
    setLoading(false)
  }

  return (
    <div className="app">
      <div className="tool-container">
        <input placeholder="Enter the asset" className="asset-input" onChange={(e) => setAsset(e.target.value.toLocaleUpperCase())} />
        <Select interval={interval} setInterval={setInterval}/>
        <div className="limit-container">
          <input type="range" min="10" max="1000" step="1" value={limit} className="limit-input" onChange={(e) => setLimit(e.target.value)} />
          <span className="limit">{limit}</span>
        </div>
        <button disabled={loading} className="pair-btn" onClick={getPairsAndKlines}>Get Pairs</button>
      </div>
      <div className="pairs-header"><span>There Are : {pairs.length} Pairs</span></div>
      {!loading ? <Table /> : <img className="loader" src={loader} alt="loader"></img>}
    </div>
  )
};

export default App;
