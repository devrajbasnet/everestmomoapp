import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Menu from './components/Menu';
import Service from './components/Service';
import Advice from './components/Advice';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about"  element={<About/>} />
        <Route path="/menu"  element={<Menu/>} />
        <Route path="/service" element={<Service/>}/>
        <Route path="/advice" element={<Advice/>}/>
        <Route path="/contact"  element={<Contact/>} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
