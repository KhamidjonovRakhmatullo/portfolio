import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavbarComponent from './components/navbar/navbar';
import HomeComponent from './components/home/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <NavbarComponent/>
   <HomeComponent/>
  </React.StrictMode>
);

