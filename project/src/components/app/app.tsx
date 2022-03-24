import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../main-screen';
import FavoritesScreen from '../favorites-screen';
import LoginScreen from '../login-screen';
import PropertyScreen from '../property-screen';
import NotFoundScreen from '../not-found-screen';
import PrivateRoute from '../private-route';
import { Offers } from '../../types/offers';
import  { ReviewsUser } from '../../types/reviews';


type AppScreenProps = {
  placesOptions: number,
  offers: Offers,
  reviews:ReviewsUser
}
function App({offers, placesOptions, reviews} :AppScreenProps ): JSX.Element {
  const favorites = offers.filter((el) => el.isFavorite === true);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen placesOptions={placesOptions} offers={offers}/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<LoginScreen/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><FavoritesScreen favorites={favorites}/></PrivateRoute>}
        />
        <Route
          path={AppRoute.Room}
          element={<PropertyScreen reviews={reviews} offers={offers}/>}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
