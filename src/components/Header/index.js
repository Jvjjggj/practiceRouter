// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <header className="header-section">
    <div className="img-logo-container">
      <img
        className="img-logo"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <h1 className="wave-head">Wave</h1>
    </div>
    <div>
      <ul className="unorder-list">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/about">About</Link>
        </li>
        <li className="link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </header>
)
export default Header
