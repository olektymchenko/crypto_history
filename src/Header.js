import React from 'react';
import logo from './img/bitcoin-brands.svg';

const Header = () => {
    return (
        <div className="Header">
            <div className="Logo">
                <img src={logo} alt="App Logo"></img>
            </div>
            <div className="HeaderText">
                <h3>CryptoApp</h3>
            </div>
        </div>
    )

}
export default Header;