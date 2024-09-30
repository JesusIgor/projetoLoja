import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Components/Header/Header';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div style={{height:"100%", maxHeight: "200vh"}}>
    <Header />
    <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();
