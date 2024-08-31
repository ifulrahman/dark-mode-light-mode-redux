import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './redux/slices/themeSlice';
import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  return (
    <div className={isDarkMode ? 'app dark-mode' : 'app light-mode'}>
      <header className="app-header">
        <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
        <div className="toggle-container">
          <span>Light</span>
          <label className="toggle-switch">
            <input type="checkbox" checked={isDarkMode} onChange={() => dispatch(toggleTheme())} />
            <span className="slider"></span>
          </label>
          <span>Dark</span>
        </div>
      </header>
      <main>
        <p>Dark Mode Light Mode Example</p>
        <Card />
      </main>
      <Footer />
    </div>
  );
}

export default App;