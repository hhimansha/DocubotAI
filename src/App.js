import './App.css';
import LandingPage from './components/landingPage';
import NavBar from './components/navBar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <NavBar/>
                <LandingPage/>
                <Footer/>
              </>
            } 
          />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
