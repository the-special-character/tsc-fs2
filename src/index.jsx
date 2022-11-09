import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import { ThemeProvider } from './context/themeContext';
import { TodoProvider } from './context/todoContext';
import './style.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <TodoProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </TodoProvider>,
);
