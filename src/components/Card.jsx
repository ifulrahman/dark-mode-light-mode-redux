import React from 'react';
import { useSelector } from 'react-redux';
import './Card-style.css';

function Card() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className={`card ${isDarkMode ? 'dark' : 'light'}`}>
      <h2>Card Title</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, unde.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ex, vero fuga quia asperiores harum cum et pariatur consequuntur nemo sint quidem doloribus, consequatur iure.</p>
    </div>
  );
}

export default Card;