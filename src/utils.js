export const getAllSymbols = (setState) => {
  fetch('https://api.binance.com/api/v3/exchangeInfo')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setState(data.symbols.map((symbol) => {
        return symbol.symbol
    }))
  });
};
