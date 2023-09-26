import { Route, Routes, Link } from "react-router-dom"
import './App.css';
import Portfolio from './Portfolio';
import About from "./AboutMe";
import ContactMe from "./ContactMe";
import Skills from "./Skills";

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Portfolio/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/skill" element={<Skills />} />
      </Routes>
  
    </div>
  );
}

export default App;
