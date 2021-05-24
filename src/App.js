import './App.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setExchangeInfo, setKlines } from './store/action/binance';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setExchangeInfo())
    dispatch(setKlines());
  }, [dispatch]);

  return (
    <div className="app"></div>
  )
};

export default App;
