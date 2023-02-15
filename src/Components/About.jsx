import React, { memo, useEffect } from 'react';
import './About.css';
import mickey from "../images/mickey.JPG";
import Typed from "typed.js";

const About = () => {
    useEffect(()=>{
        var typed = new Typed(".typing-2", {
            strings: ["Full Stack Developer", "Coder", "Problem Solver"],
            typeSpeed: 120,
            backSpeed: 90,
            loop: true,
          });
    },[])
  return (
    <section className="abouta about section" id="about">

    <div className="max-width">
    <h2 className="title">About Me</h2>
    <div className="about-content">
        <div className="column left">
            <img className="home-img" src={mickey} alt="kartikmickey"/>
        </div>
        <div className="column right">
            <div  id="user-detail-name" className="text">I'm Kartik Jain and I'm a <span className="typing-2"></span></div>
            <p id="user-detail-intro" >A Passionate Web developer who
works with both the front and
back ends of a website or
application. Provide an end-to-end service, and can be involved
in projects that involve
databases and building user-facing websites. Problem-solving mindset with a goal to optimize application for better stability and speed.</p>
       </div>
    </div>
</div>
    </section>
  )
}

export default memo(About)