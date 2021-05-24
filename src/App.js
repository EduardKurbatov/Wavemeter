import './App.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getExchangeInfo } from './store/api/binance';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getExchangeInfo(dispatch);
  }, [dispatch]);

  return (
    <div className="app"></div>
  )
};

export default App;
