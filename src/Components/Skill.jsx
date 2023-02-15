import React from 'react';
import './Skill.css';
import html from "../images/html.svg";
import javaScript from "../images/javaScript.webp";
import react from "../images/react.png";
import node from "../images/node.png";
import mango from "../images/mango.png";
import next from "../images/next.png";
import redux from "../images/redux.png";

const Skill = () => {
  return (
    <section className="skills" id="skills">
    <div className="max-width">
        <h2 className="title">My Skills</h2>
        <div className="skills-content">
            <div className="column left">

                <div className="skills-images skills-card">
                    <img className="skills-card-img" src={html} alt="html"/>
                    <p className="skills-card-name">Html</p>
                </div>

                <div className="skills-images skills-card">
                    <img className="skills-card-img" src="https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg" alt="css"/>
                    <p className="skills-card-name">Css</p>
                </div>

                <div className="skills-images skills-card reduce">
                    <img className="skills-card-img" src={javaScript} alt="JavaScript"/>

                    <p className="skills-card-name">Js</p>
                </div>

                <div className="skills-images skills-card reduce">
                    <img className="skills-card-img" src={react} alt="react"/>
                    <p className="skills-card-name">React</p>
                </div>


            </div>


            <div className="column right">

                

                <div className="skills-images skills-card">
                    <img className="skills-card-img" src={node} alt="node.js"/>
                    <p className="skills-card-name">Node</p>
                </div>


                <div className="skills-images skills-card">
                    <img className="skills-card-img" src={mango} alt="mangoDB"/>
                    <p className="skills-card-name">Mango</p>
                </div>
                
                <div className="skills-images skills-card">
                    <img className="skills-card-img" src={next} alt="next"/>
                    <p className="skills-card-name">next</p>
                </div>

                <div className="skills-images skills-card">
                    <img className="skills-card-img" src={redux} alt="redux"/>
                    <p className="skills-card-name">redux</p>
                </div>


            </div>
        </div>
    </div>
</section>
  )
}

export default Skill