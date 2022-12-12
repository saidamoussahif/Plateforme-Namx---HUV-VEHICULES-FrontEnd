import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
<<<<<<< HEAD
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);
=======
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
>>>>>>> b3573fb0d3a3a5f2bd1676faf95eee6936c1d344

root.render(
<<<<<<< HEAD
   <BrowserRouter>
    <Provider store={store}>
      <App />
     </Provider>
   </BrowserRouter>
=======
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
>>>>>>> b3573fb0d3a3a5f2bd1676faf95eee6936c1d344
);

