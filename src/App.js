import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Home from './navbar/home';
import About from './navbar/about';
import Service from './navbar/serivce';
import Contact from './navbar/contact';

function App() {
  return (
    <div className="App">
          <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
     
    </div>
  );
}

export default App;
