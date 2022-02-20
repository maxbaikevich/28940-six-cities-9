import MainScreen from '../main-screen';

type AppScreanProp = {
  placesOptions: number
}
function App({placesOptions} :AppScreanProp ): JSX.Element {
  return (
    <MainScreen placesOptions={placesOptions}/>
  );
}

export default App;
