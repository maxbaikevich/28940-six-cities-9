import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../main-screen';
import FavoritesScreen from '../favorites-screen';
import LoginScreen from '../login-screen';
import PropertyScreen from '../property-screen';
import NotFoundScreen from '../not-found-screen';
import PrivateRoute from '../private-route';


type AppScreenProps = {
  placesOptions: number
}
function App({placesOptions} :AppScreenProps ): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen placesOptions={placesOptions}/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<LoginScreen/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><FavoritesScreen/></PrivateRoute>}
        />
        <Route
          path={AppRoute.Room}
          element={<PropertyScreen/>}
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
