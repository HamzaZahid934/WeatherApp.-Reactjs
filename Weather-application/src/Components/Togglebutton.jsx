import React from 'react';
import { useTheme } from '../Pages/Themecontext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-800 text-white'}`}
        >
            Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    );
};

export default ThemeToggle;
