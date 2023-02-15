import React from 'react';
import './Project.css';
import Reliance from "../images/Reliance.png"
import Gusto from "../images/Gusto.png"
import MyGlamm from "../images/MyGlamm.png"

const Project = () => {

  return (
    <section className="project" id="projects">
        <div className="max-width">
            <h2 className="titles">Projects</h2>
            <div id='cards' >

<div className="card project-card">
             <div className="box">
              <img src={Reliance} alt=""/>
               <div className="text project-title">Reliance Digital</div>
            <p className='project-description' >This is an Indian consumer electronics retailer. It is a subsidiary of Reliance Retail, a wholly owned subsidiary of Reliance Industries.

            </p>
          <br/>
         <p className="techStack project-tech-stack">TechStack : JavaScrpit, HTML, CSS, React</p>
        <div className="repo-links">
           <div className="repo-div">
        <span>  <a className='project-github-link' href="https://github.com/kartikmickey/mindless-wool-6764" target="_blank"> Git Repo </a></span>
             </div>
              <div className="demo-div">
               <span> <a className='project-deployed-link' href="https://chipper-parfait-a47527.netlify.app/" target="_blank">Live </a></span>
                 </div>
           </div>
                        </div>   
       </div>

       <div className="card project-card">
             <div className="box">
              <img src={Gusto} alt=""/>
               <div className="text project-title">Gusto</div>
            <p className='project-description'>Gusto, Inc. is a company that provides a cloud-based payroll, benefits, and human resource management software for businesses based in the United States.

            </p>
          <br/>
         <p className="techStack project-tech-stack">TechStack : HTML, CSS</p>
        <div className="repo-links">
           <div className="repo-div">
        <span>  <a className='project-github-link' href="https://github.com/kartikmickey/jealous-seashore-7503" target="_blank"> Git Repo </a></span>
             </div>
 
                 <div className="demo-div">
               <span> <a className='project-deployed-link' href="https://heartfelt-semifreddo-3e60e2.netlify.app/" target="_blank">Live </a></span>
                 </div>

           </div>
                        </div>   
       </div>

       <div className="card project-card">
             <div className="box">
              <img src={MyGlamm} alt=""/>
               <div className="text project-title">MyGlamm</div>
            <p className='project-description'>This is an Indian e-commerce company that sells cosmetics and personal care products. MyGlamm became the first Indian unicorn startup in the DTC beauty and personal care business.

            </p>
          <br/>
         <p className="techStack project-tech-stack">TechStack : JavaScrpit, HTML, CSS, React, ChakraUI</p>
        <div className="repo-links">
           <div className="repo-div">
        <span>  <a className='project-github-link' href="https://github.com/kartikmickey/lumpy-creature-6886" target="_blank"> Git Repo </a></span>
             </div>
              <div className="demo-div">
               <span> <a className='project-deployed-link' href="https://willowy-monstera-1cbc16.netlify.app/" target="_blank">Live </a></span>
                 </div>
           </div>
                        </div>   
       </div>

       <div className="card project-card">
             <div className="box">
              <img src={Reliance} alt=""/>
               <div className="text project-title">Reliance Digital</div>
            <p className='project-description'>This is an Indian consumer electronics retailer. It is a subsidiary of Reliance Retail, a wholly owned subsidiary of Reliance Industries.

            </p>
          <br/>
         <p className="techStack project-tech-stack">TechStack: JavaScrpit, HTML, CSS, React</p>
        <div className="repo-links">
           <div className="repo-div">
        <span>  <a className='project-github-link' href="https://github.com/kartikmickey/mindless-wool-6764" target="_blank"> Git Repo </a></span>
             </div>
              <div className="demo-div">
               <span> <a className='project-deployed-link' href="https://chipper-parfait-a47527.netlify.app/" target="_blank">Live </a></span>
                 </div>
           </div>
                        </div>   
       </div>           

            </div>
        </div>
    </section>
  )
}

export default Project