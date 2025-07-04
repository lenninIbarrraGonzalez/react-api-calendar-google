import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CalendarApp } from './CalendarApp';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CalendarApp />
    </BrowserRouter>
  </StrictMode>,
);
