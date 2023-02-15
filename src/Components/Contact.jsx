import React, { useRef, useState } from 'react';
import {
    Alert,
    AlertIcon
  } from '@chakra-ui/react'
import emailjs from '@emailjs/browser';
import './Contact.css';
import {  FaEnvelope,FaLinkedin,FaGithub,FaPhoneAlt } from 'react-icons/fa';

export const Contact = () => {
    const [data, setData] = useState({
        user_name: "",
        user_email: "",
        subject: "",
        message: ""
    })
    // console.log(data)
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jt3ynng', 'template_49gwlh6', form.current, 'HKBDlEZO8cItuZA7j')
      .then((result) => {
          console.log(result.text, "Message Sent Successfully!");
          setData({
            user_name: "",
            user_email: "",
            subject: "",
            message: ""
        })
        alert("Message Sent Successfully!")
      }, (error) => {
          console.log(error.text);
          alert("Please try again!")
      });
  };



  return (
    <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Contact me</h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Get in Touch</div>
                    <p>Got a project? Reach out and let's work together on something exciting. Big or small. Mobile or web.</p>
                    <div className="icons">
                        <div className="row">
                            <a href=" mailto:741kartikjain@gmail.com">   <FaEnvelope className='i' /> </a>
                            <div className="info">
                                <div className="head"></div>
                                <div className="sub-title">  <a id="contact-email" href="mailto:741kartikjain@gmail.com"> 741kartikjain@gmail.com </a> </div>
                            </div>
                        </div>
                        <div className="row">
                             <a href="https://in.linkedin.com/in/kartikmickey" target="_blank"> <FaLinkedin className="i"/> </a>
                            <div className="info">
                                <div className="sub-title">  <a id="contact-linkedin" href="https://www.linkedin.com/in/kartikmickey" target="_blank">Linkedin</a> </div>
                            </div>
                        </div>
                        <div className="row">
                             <a href="https://github.com/kartikmickey" target="_blank"> <FaGithub className="i" /> </a>
                            <div className="info">
                                <div className="sub-title"> <a id="contact-github" href="https://github.com/kartikmickey" target="_blank" >GitHub</a> </div>
                            </div>
                        </div>

                        <div className="row">
                        <FaPhoneAlt className='i' />
                           <div className="info">
                               <div className="sub-title" id="contact-phone" > +91 7415418598</div>
                           </div>
                       </div>

                        

                    </div>
                                </div>
                <div className="column right">
                    <div className="text">Message me</div>
                    <form id="myForm" ref={form} onSubmit={sendEmail} >
                        <div className="fields">
                            <div className="field name">
                                <input type="text" value={data.user_name} onChange={(e)=>setData({
                                    ...data,
                                    user_name : e.target.value
                                })} name="user_name" placeholder="Name" required/>
                            </div>
                            <div className="field email">
                                <input type="email" name="user_email" onChange={(e)=>setData({
                                    ...data,
                                    user_email : e.target.value
                                })}   value={data.user_email} placeholder="Email" required/>
                            </div>
                        </div>
                        <div className="field">
                            <input type="text" name="subject" onChange={(e)=>setData({
                                    ...data,
                                    subject : e.target.value
                                })}   value={data.subject} placeholder="Subject" required/>
                        </div>
                        <div className="field textarea">
                            <textarea cols="30" rows="10" name="message" onChange={(e)=>setData({
                                    ...data,
                                    message : e.target.value
                                })}   value={data.message} placeholder="Message.." required></textarea>
                        </div>
                        <div className="button-area">
                            <button type="submit">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

  )
}
