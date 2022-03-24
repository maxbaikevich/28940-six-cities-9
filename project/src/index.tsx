import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { Offers } from './types/offers';
import {ReviewsUser } from './types/reviews';
import { reviews } from './mocks/reviews';
const Setting = {
  PLACES_OPTIONS: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      placesOptions = {Setting.PLACES_OPTIONS}
      offers = {offers as Offers}
      reviews = { reviews as ReviewsUser}
    />
  </React.StrictMode>,
  document.getElementById('root'));
