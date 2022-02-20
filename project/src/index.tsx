import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  PLACES_OPTIONS: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      placesOptions = {Setting.PLACES_OPTIONS}
    />
  </React.StrictMode>,
  document.getElementById('root'));
