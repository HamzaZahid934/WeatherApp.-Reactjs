import React from 'react'
import './App.css'
import Weatherpage from './Pages/Weatherpage'
import { ThemeProvider, useTheme } from './Pages/Themecontext';
import ThemeToggle from './Components/Togglebutton';

function App() {

  const { theme } = useTheme();
  return (
    <React.Fragment>
      <Weatherpage />
      <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} min-h-screen`}>
        <header className="p-4">
          <h1>Dark/Light Mode Toggle Example</h1>
          <ThemeToggle />
        </header>
        <main className="p-4">
          <p>This is a simple example of how to implement a dark/light mode toggle in React.</p>
        </main>
      </div>
    </React.Fragment>
  )
}

export default App
