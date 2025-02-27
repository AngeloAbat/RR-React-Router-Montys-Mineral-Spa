
import './App.css';

import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'
import MyAttempt from './components/myAttempt'


function App() {

  const packages = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath']
  const tryOut = ['Stove spike', 'Stove spoof', 'Stove test', 'Stove monkey']

  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Welcome to Monty's Mineral SPA</h1>

          <div className="navBar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/packages">Our Packages</Link>
              </li>
              <li>
                <Link to="/firstTry">My Attempt</Link>
              </li>
            </ul>
          </div>

        </header>
        <div className='display'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about"  element={<About />}/>
            <Route path="/packages" element={<Packages packages={packages}/>} />
            <Route path="/firstTry" element={<MyAttempt tryOut={tryOut}/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App; 




