import './App.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { binanceClient } from './store/api/binanceClient';
import { BINANCE_URL } from './store/conctants';
import { setExchangeInfo } from './store/action/index';

function App() {
  const dispatch = useDispatch();

  const getExchangeInfo = () => {
    return binanceClient.get(BINANCE_URL)
      .then((response) => {
         dispatch(setExchangeInfo(response.data.symbols.map((item) => {
          return {
            baseAsset: item.baseAsset,
            quoteAsset: item.quoteAsset,
            symbol: item.symbol
          }
        })))
      })
      .catch((error) => {
        return {
          data: error.resposnse.data,
          isError: true
        }
      })
  };

  useEffect(() => {
    getExchangeInfo()
  }, []);

  return (
    <div className="app"></div>
  )
};

export default App;
