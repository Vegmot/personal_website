import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  const toggleMenuHandler = e => {
    const navbar = document.getElementById('main-nav-items');
    const navbarToggle = document.getElementById('toggle');
    const isDarkMode = document.getElementById('cb5');

    navbarToggle.addEventListener('click', () => {
      if (navbar.style.display === 'none') {
        navbar.style.display = 'block';
        navbar.classList.add('mobileMenuActive');
      } else {
        navbar.style.display = 'none';
        navbar.classList.remove('mobileMenuActive');
      }

      if (
        isDarkMode.getAttribute.checked ||
        navbar.classList.contains('mobileMenuActive')
      ) {
        navbarToggle.style.color = '#f8f1f1';
      } else {
        navbarToggle.style.color = '#350b40';
      }
    });
  };

  return (
    <>
      <nav id='main-nav' className='main-nav'>
        <span id='toggle' className='toggle' onClick={toggleMenuHandler}>
          <i className='fa fa-bars hamburger fa-2x'></i>
        </span>

        <ul id='main-nav-items' className='main-nav-items'>
          <li className='main-nav-item'>
            <Link to='/'>Home</Link>
          </li>

          <li className='main-nav-item'>
            <Link to='/about'>About</Link>
          </li>

          <li className='main-nav-item'>
            <Link to='/projects'>Projects</Link>
          </li>

          <li className='main-nav-item'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
