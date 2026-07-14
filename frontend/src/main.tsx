import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import './index.css';
import App from './App';
import { store } from './app/store';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />

        <App />
      </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
);