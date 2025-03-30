import React from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
const ThemeToggle = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  return <button onClick={toggleTheme} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200" aria-label="Toggle theme">
      {theme === 'light' ? <MoonIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" /> : <SunIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
    </button>;
};
export default ThemeToggle;