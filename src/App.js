// import logo from './logo.svg';
import './static/styles/App.scss'
import Header from './components/navigation/Header';
import HomeSlider from './components/home-slider/HomeSlider';
import KonaPlate from './components/kona-plate/KonaPlate';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSlider />
      <KonaPlate />
    </div>
  );
}

export default App;
