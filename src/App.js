import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState('BTC/INR'); // State to store the selected cryptocurrency

  async function fetchdata() {
    const response = await axios.get('https://weatherapp-jyjr.onrender.com/data/get-data');
    setData(response.data);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  // Callback function to set the selected cryptocurrency
  const handleCryptoChange = (selectedValue) => {
    setSelectedCrypto(selectedValue);
    console.log(selectedCrypto);
  };
  return (
    <div className="app">
      <Navbar onCryptoChange={handleCryptoChange}  cryptoData={data.map(item => ({ name: item?.value.name, base_unit: item?.value.base_unit }))} />
      <Main selectedCrypto={selectedCrypto} cryptoData={data}/>
      <Footer selectedCrypto={selectedCrypto} cryptoData={data} />
      <div className='Portfolio'>
        <button className="addPortfolio">Add Portfoli to home screen</button>
      </div>
    </div>
  );
}

export default App;
