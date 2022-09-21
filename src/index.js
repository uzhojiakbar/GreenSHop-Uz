import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root';
import './style-main.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='Main'>
      <Root></Root>
    </div>
  </React.StrictMode>
);