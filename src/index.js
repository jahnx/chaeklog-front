import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { CookiesProvider } from 'react-cookie';

axios.defaults.baseURL = 'http://15.164.146.105:8080';
// axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
  'token',
)}`;
// axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <CookiesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CookiesProvider>,
);
