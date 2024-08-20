import React from 'react';
import './App.css';
import Weatherpage from './Pages/Weatherpage';
import { useTheme } from './Pages/Themecontext';
import ThemeToggle from './Components/Togglebutton';

function App() {
  const { theme } = useTheme();

  const appStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#1a202c', 
    color: theme === 'light' ? '#000000' : '#ffffff',
    minHeight: '100vh',
  };

  return (
    <React.Fragment>
      <div style={appStyle}>
        <div>
          <Weatherpage />
        </div>
        <ThemeToggle />
      </div>
    </React.Fragment>
  );
}

export default App;
