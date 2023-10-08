import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Starter from './components/Starter';
import PlanetInfo from './components/PlanetInfo';
import Reviews from './components/Reviews';
import OtherPlanets from './components/OtherPlanets';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Starter />
      <PlanetInfo />
      <Reviews />
      <OtherPlanets />
    </div>
  );
}

export default App;
