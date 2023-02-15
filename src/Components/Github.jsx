import React from 'react';
import './GitHub.css';
import Githubcalendar from "react-github-calendar";
import ReactTooltip from 'react-tooltip'
export const Github = () => {
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 8;
      
        return contributions.filter(day => {
          const date = new Date(day.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };
  return (
    <section className="abouta about section" id="github">

    <div className="max-width">
    <h2 className="title">GitHub</h2>
   <div style={{margin: "auto", textAlign: "center"}} >
   <Githubcalendar
   className="react-activity-calendar" 
          username="kartikmickey"
          blockSize={18}
          blockMargin={5}
          fontSize={16}
          blockRadius={2}   
        //   transformData={selectLastHalfYear} 
        // theme="dark"
        hideColorLegend
        >
            <ReactTooltip html/>
        </Githubcalendar>
        <div id="sec">
        <img  id="github-streak-stats" src='https://github-readme-streak-stats.herokuapp.com?user=kartikmickey' />
       
        <img  id="github-stats-card"  src='https://github-readme-stats.vercel.app/api?username=kartikmickey' />
        
        </div>
        <img style={{margin: "auto"}} id="github-top-langs"  src='https://github-readme-stats.vercel.app/api/top-langs/?username=kartikmickey' />
   </div>
    </div>
    </section>
  )
}

