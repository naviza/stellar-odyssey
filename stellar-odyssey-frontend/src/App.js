import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Starter from './components/Starter';
import PlanetInfo from './components/PlanetInfo';
import Reviews from './components/Reviews';
import OtherPlanets from './components/OtherPlanets';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlanetFilter from './components/PlanetFilter';
import Overview from './components/Overview';


function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router> */}
      <Header />
      <PlanetFilter />
      <Starter />
      <PlanetInfo />
      <Overview />
      <Reviews />
      <OtherPlanets />
      <Footer />
    </div>
  );
}

export default App;
