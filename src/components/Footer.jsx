import React from 'react';
import { useSelector } from 'react-redux';
import './Footer-style.css';

function Footer() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <footer className={`footer ${isDarkMode ? 'dark' : 'light'}`}>
      <p>&copy; 2024 Muhammad Syaiful Rahman. All rights reserved.</p>
    </footer>
  );
}

export default Footer;