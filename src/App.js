import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import QuienesSomos from './components/QuienesSomos';
import Contacto from './components/Contacto';


function App() {
  return (
   
    <div className="App">
      <Router>
        <Navbar />
      
      </Router>
    </div>
  
  );
}

export default App;
