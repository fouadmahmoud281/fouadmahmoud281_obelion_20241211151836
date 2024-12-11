import React from 'react';
import './TradingVenueSubmitComponent.css';

function TradingVenueSubmitComponent() {
  return (
    <div className="trading-venue-container">
      <header className="header">
        <img src="URL_TO_LOGO" alt="Company Logo" className="logo" />
        <nav className="navigation">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </header>
      <main className="main-content">
        <form className="order-form">
          <label htmlFor="order-id" className="form-label">Order ID</label>
          <input type="text" id="order-id" className="form-input" />
          <label htmlFor="order-type" className="form-label">Order Type</label>
          <input type="text" id="order-type" className="form-input" />
          <label htmlFor="order-quantity" className="form-label">Order Quantity</label>
          <input type="number" id="order-quantity" className="form-input" />
          <button type="submit" className="submit-button">Submit Order</button>
        </form>
        <div className="auxiliary-links">
          <a href="#help" className="aux-link">Help</a>
          <a href="#support" className="aux-link">Support</a>
        </div>
      </main>
      <footer className="footer">
        <p className="footer-text">© 2023 Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default TradingVenueSubmitComponent;
