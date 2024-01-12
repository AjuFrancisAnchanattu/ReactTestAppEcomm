// Header.js

import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Your Logo</div>
      <div className="header-icons">
        <div className="search-box">Search</div>
        <div className="favorite-icon">Favorite</div>
        <div className="cart-icon">Cart</div>
        <button className="get-started-btn">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
