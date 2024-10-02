import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { GlobalStyle } from './styles/GlobalStyle';
import { AppProvider } from './Context';

createRoot(document.getElementById('root')).render(  
  <StrictMode>
  <AppProvider>
  <GlobalStyle/>
    <App/>
  </AppProvider>
  </StrictMode>,
)
