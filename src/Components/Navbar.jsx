import { useEffect, useState } from "react";
import { GoThreeBars } from "react-icons/go";
import './Navbar.css';
import Resume from "../images/Resume.pdf"
import { saveAs } from "file-saver";
import { HashLink as Link } from "react-router-hash-link"
 
const Navbar = ()=> {
  const handleClick = ()=>{
    
    saveAs(Resume, "Kartik_Jain_Resume");
   }
    const [name, setName] = useState(false)
    const [hover , setHover] = useState(false)
        const handleScroll = () => {
          const scrollPosition = window.scrollY; // => scroll position
          let com= document.getElementById("navComp")
          if(scrollPosition > 20 ){
            setName(true)
            com.classList.add("mystyle")
          }
          else{
            setName(false)
            com.classList.remove("mystyle")
          }
      };
      useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
        }, []);
        // console.log(hover)
    function openNav() {
        document.getElementById("myNav").style.height = "100%";
      }
      
      function closeNav() {
        document.getElementById("myNav").style.height = "0%";
      }

    return  <div style={{
        padding : name ? "15px 40px" : "" ,
        backgroundColor : name ? "#92bcb5" : "transparent",
        color : name ? "black" : ""

    }}  id="nav-menu">
    
   <a href="/"> <p style={{ color : name ? "black" : ""

}} id="navName" >Kartik Jain </p></a>
    <p id="navComp"  style={{ color : name ? "black" : ""
}} 
>
    <Link className="nav-link home" to="#home" smooth >Home</Link>
    {/* <Link to="#about" smooth >About</Link> */}
    <Link className="nav-link about" to="#about" smooth>About</Link>
    <Link className="nav-link skills" to="#skills" smooth>Skills</Link>
    <Link className="nav-link projects" to="#projects" smooth>Projects</Link>
    <Link className="nav-link contact" to="#contact" smooth>Contact</Link>
    <a className="nav-link resume" id="resume-link-1" onClick={handleClick} href="https://drive.google.com/file/d/19vD9-jQMpAhc3_5ZnVkNKzAw70IvYk71/view?usp=share_link"  target="_blank" download >Resume</a>
    </p>
    <p id="mobile" onClick={openNav} style={{fontSize:"30px",color:"white", cursor: "pointer",float: "right", textAlign: "center" }} ><GoThreeBars/></p>

   <div id="myNav" className="overlay">
  <a className="closebtn" onClick={closeNav}>&times;</a>
  <div className="overlay-content">
    <Link to="#home" smooth  onClick={closeNav} >HOME</Link>
    <Link to="#about" smooth  onClick={closeNav} >ABOUT</Link>
    <Link to="#skills" smooth  onClick={closeNav} >SKILLS</Link>
    <Link to="#projects" smooth  onClick={closeNav} >PROJECTS</Link>
    <Link to="#contact" smooth  onClick={closeNav} >CONTACT</Link>
    <a onClick={handleClick} href="https://drive.google.com/file/d/19vD9-jQMpAhc3_5ZnVkNKzAw70IvYk71/view?usp=share_link" target="_blank" download >RESUME</a>
  </div>
</div>
  </div>
  
  
}

export default Navbar;