import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { Offers } from './types/offers';
const Setting = {
  PLACES_OPTIONS: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      placesOptions = {Setting.PLACES_OPTIONS}
      offers = {offers as Offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
