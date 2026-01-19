import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
      style={{
        backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.15)',
        color: theme === 'dark' ? '#00f2ff' : '#0ea5e9',
        boxShadow: theme === 'dark' 
          ? '0 0 20px rgba(0, 242, 255, 0.1)' 
          : '0 0 20px rgba(14, 165, 233, 0.1)',
      }}
      title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {theme === 'dark' ? (
        <Sun className="w-6 h-6 transition-transform group-hover:rotate-90 duration-300" />
      ) : (
        <Moon className="w-6 h-6 transition-transform group-hover:-rotate-90 duration-300" />
      )}
    </button>
  );
};
 

export default ThemeToggle;
