import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Art from './components/Art';
import Work from './components/Work';
import Projects from './components/Projects';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/art" element={<Art />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </div>
      </Router>
    </>
    

  );
}

export default App
