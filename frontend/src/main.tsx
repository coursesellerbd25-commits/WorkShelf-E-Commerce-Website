import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';

import './index.css';
import App from './App';
import { store } from './app/store';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { ThemeProvider } from './context/ThemeContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <HelmetProvider>
      <BrowserRouter>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        <App />
      </BrowserRouter>
      </HelmetProvider>
      </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
);