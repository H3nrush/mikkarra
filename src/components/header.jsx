import React from 'react';
import './Header/style.css';
import logo from '../themes/logo/iconRed.png';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header id='header'>
        <nav className='nav-bar'>
            <img src={logo} id='logo' alt="mikkarra.com" />
            <ul>
              <Link to={'/'}><li>Home</li></Link>
              <Link to={'/'}><li>Collections</li></Link>
              <Link to={'/'}><li>NFTs</li></Link>
              <Link to={'/'}><li>Market</li></Link>
              <Link to={'/'}><li>More</li></Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header;