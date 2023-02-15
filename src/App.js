
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Skill from './Components/Skill';
import Project from './Components/Project';
import { Github } from './Components/Github';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
// import { HashLink as Link } from "react-router-hash-link"

function App() {
  return (
    <div >
    <Navbar/>
    <Home/>
    <About/>
    <Services/>
    <Skill/>
    <Project/>
    <Github/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
