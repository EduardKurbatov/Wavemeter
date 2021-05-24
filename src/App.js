import './App.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setExchangeInfo } from './store/action/binance';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    setExchangeInfo()(dispatch);
  }, [dispatch]);

  return (
    <div className="app"></div>
  )
};

export default App;
