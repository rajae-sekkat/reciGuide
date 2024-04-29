import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';




function App() {


  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Home" element={ <Home/> } />
        <Route path="/About" element={ <About/> } />
        <Route path="/Login" element={ <Login/> } />
        <Route path="/Signup" element={ <Signup/> } />
        <Route path="/Profile" element={ <Profile/> } />
  
        
      </Routes>
    </Router>
  </div>
  );
}

export default App
