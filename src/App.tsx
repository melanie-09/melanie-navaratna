import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
      <p>This is the home page.</p>
    </>
    

  );
}

export default App
