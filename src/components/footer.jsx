import React from 'react';
import './Footer/style.css';
import { Link } from 'react-router-dom';
import instagram from '../themes/logo/instagram.png';
import x from '../themes/logo/x.png';
import getgems from '../themes/logo/getgems.jpg';
import telegram from '../themes/logo/telegram.png';
import youttube from '../themes/logo/youtube.png';
import logoWhite from '../themes/logo/iconWhite.png';

function Footer() {
  return (
    <footer id="footer">
      <section id="footer-items1">

      </section>

      <section id="footer-items2">
        <img src={logoWhite} alt="mikkarra" className='logo-white' />
      <div className='social-media'>
        <Link to=''><img src={youttube} className='social-icon' alt="YouTube" /></Link>
        <Link to=''><img src={x} className='social-icon' alt="X" /></Link>
        <Link to=''><img src={getgems} className='social-icon getgems' alt="GetGems" /></Link>
        <Link to=''><img src={instagram} className='social-icon' alt="Instagram" /></Link>
        <Link to=''><img src={telegram} className='social-icon' alt="Telegram" /></Link>
      </div>
      </section>

      <section id='footer-items3'>

      </section>
      
    </footer>
  )
}

export default Footer;