
import './App.css';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Skill from './Components/Skill/Skill';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Skill/>
    <Portfolio/>
    <Blog/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
