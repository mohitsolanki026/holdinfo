import React, { useState } from "react";
import "./navbar.css"

function Navbar(props) {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    props.onCryptoChange(selectedValue); // Call the callback to pass the selected value to App
  };

  return (
    <div className="nav-container">
      <div className="nav-box">
        <h1 className="heading">HODLINFO</h1>
        <div className="middle-bar">
          <select name="currency" id="currency">
            <option className="option" value="inr">INR</option>
          </select>
          <select name="currency" id="currency" onChange={handleDropdownChange}>
            {props.cryptoData.map((crypto, index) => (
              <option  key={index} className="option" value={crypto.name}>{crypto.base_unit}</option>
            ))}
          </select>
          <button className="buy">BUY BTC</button>
        </div>
        <div className="side-bar">
          <div className="timmer">
            <h3 style={{margin:"0", padding:"0"}}>59</h3>
          </div>
          <div >
            <button className="telegram">Connect Telegram</button>
          </div>
          <div>
            {/* Slide-toggle button */}
            <label className="slide-toggle">
              <input
                type="checkbox"
                checked={isToggled}
                onChange={handleToggle}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
