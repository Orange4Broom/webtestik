import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './components/context/Authcontext.tsx';
import { App } from './App.tsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
