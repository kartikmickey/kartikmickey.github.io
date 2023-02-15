import React from 'react';
import './Services.css';
import {  FaCode, FaPaintBrush,FaChartLine } from 'react-icons/fa';
const Services = () => {
  return (

    <section className="services" id="services">

    <div className="max-width">
        <h2 className="titles">My Services</h2>
        <div className="serv-content">
            <div className="card">
                <div className="box">
             <FaPaintBrush className='i' />
                    <div className="text">Web Design</div>
                    <p>Proficient in providing Web Designs.</p>
                </div>
            </div>
            <div className="card">
                <div className="box">
                  <FaChartLine className='i' />
                    <div className="text">REST API</div>
                    <p>Providing exceptional Rest API's.</p>
                </div>
            </div>
            <div className="card">
                <div className="box">
                   <FaCode className='i' />
                    <div className="text">Backend Development</div>
                    <p>Proficient in Backend JS application</p>
                </div>
            </div>
           </div>
        </div>
  </section>



  );

}

export default Services