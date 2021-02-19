import React, { useState } from 'react';

import './DarkmodeToggle.css';

// https://stackoverflow.com/questions/32923255/react-checkbox-doesnt-toggle
// https://codepen.io/mallendeo/pen/eLIiG
const DarkmodeToggle = () => {
  let [turnDarkmodeOn, setTurnDarkmodeOn] = useState(true);

  const setPageColour = () => {
    const navbar = document.getElementById('main-nav');
    const navItem = document.querySelectorAll(
      '#main-nav-items .main-nav-item-link'
    ); // querySelectorAll returns an array

    if (turnDarkmodeOn) {
      document.body.style.backgroundColor = '#350b40';
      document.body.style.color = '#f8f1f1';
      navbar.style.backgroundColor = '#3b2e5a';
      navItem.forEach(item => {
        item.style.color = '#f8f1f1';
      });
    } else {
      document.body.style.backgroundColor = '#f8f1f1';
      document.body.style.color = '#350b40';
      navbar.style.backgroundColor = '#350b40';
      navItem.forEach(item => {
        item.style.color = '#f8f1f1';
      });
    }

    navItem.forEach(item => {
      item.addEventListener('click', () => {
        const activeItem = document.querySelector(
          '#main-nav-items .main-nav-item.active'
        );

        if (item.classList.contains('active')) {
          return;
        } else {
          activeItem.classList.remove('active');
          item.classList.add('active');
        }
      });
    });
  };

  return (
    <div className='dark-mode-toggle' id='dark-mode-toggle'>
      <div className='divider'></div>
      <input
        className='tgl tgl-flip'
        id='cb5'
        type='checkbox'
        checked={turnDarkmodeOn}
        onChange={e => setTurnDarkmodeOn(e.target.checked)}
        onClick={() => {
          setTurnDarkmodeOn(!turnDarkmodeOn);
          setPageColour();
        }}
      />
      <label
        className='tgl-btn'
        data-tg-off='🔆'
        data-tg-on='🌙'
        htmlFor='cb5'
      ></label>
    </div>
  );
};

export default DarkmodeToggle;
