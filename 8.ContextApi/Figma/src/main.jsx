import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ToggleContextProvider } from "./contexts/toggleContext";
import { CartContextProvider } from "./contexts/cartContext";
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToggleContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ToggleContextProvider>
  </React.StrictMode>
)
