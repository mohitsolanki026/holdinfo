import React from 'react';
import './main.css';

function Main(props) {
  // Find the selected cryptocurrency's data based on the selectedCrypto prop
  const selectedCryptoData = props.cryptoData.find(
    (crypto) => crypto.value.name === props.selectedCrypto
  );

  const fiveMinChange =
    selectedCryptoData &&
    selectedCryptoData.value.last - selectedCryptoData.value.buy;

  console.log(props);
 console.log(selectedCryptoData)
  return (
    <div className="main">
      <div></div>
      <div className="mainValues">
        <div className="percentTime">
        <h1>{fiveMinChange ? fiveMinChange.toFixed(2) : '0.19 %'}</h1>
          <p>5 Mins</p>
        </div>
        <div className="percentTime">
          <h1>1.2%</h1>
          <p>1 Hour</p>
        </div>
        <div>
          <p className="bestTrade">Best Price to Trade</p>
          <h1 className="Price">
            ₹ {selectedCryptoData ? selectedCryptoData.value.last : '24,03,947'}
          </h1>
          <p>Average {selectedCryptoData ? selectedCryptoData.value.name : 'BTC/INR'} net price including commission</p>
        </div>
        <div className="percentTime">
          <h1>9.79%</h1>
          <p>1 Day</p>
        </div>
        <div className="percentTime">
          <h1>12.77%</h1>
          <p>7 Day</p>
        </div>
      </div>
      <div className="mainFooter"></div>
    </div>
  );
}

export default Main;
