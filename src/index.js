import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Fold2 from './components/fold2';
import Fold3 from './components/fold3';
import Fold4 from './components/fold4';
import Fold5 from './components/fold5';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Fold2 />
    <Fold3 />
    <Fold4 />
    <Fold5 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
