import Header from './Header';
import Starter from './Starter';
import PlanetInfo from './PlanetInfo';
import Reviews from './Reviews';
import OtherPlanets from './OtherPlanets';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlanetFilter from './PlanetFilter';
import Surface from './Surface';

export default function Home() {
    return (
    <div>        
        <Header />
        <PlanetFilter />
        <Starter />
        <PlanetInfo />
        <Surface />
        <Reviews />
        <OtherPlanets />
        <Footer />
    </div>


    );
  }