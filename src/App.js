import './App.css';
import LandingPage from './components/landingPage';
import NavBar from './components/navBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
