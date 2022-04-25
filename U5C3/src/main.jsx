import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { EmployeeContextProvider } from './contexts/EmployeeContext';
import { LoginContextProvider } from './contexts/LoginContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EmployeeContextProvider> 
      <LoginContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LoginContextProvider>
    </EmployeeContextProvider>
  </React.StrictMode>
);
