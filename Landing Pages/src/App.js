import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path="/" element={<Home/>}></Route>
   <Route path="/about" element={<About/>}></Route>
   <Route path="/services" element={<Services/>}></Route>
   <Route path="/contact" element={<Contact/>}></Route>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  );
}

export default App;
