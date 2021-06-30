import React from 'react';
import './contact.css';
import { NavLink } from 'react-router-dom';
const Contact = () => {
    return (
        <div>
        <div className="homelink">
        <NavLink to="/">Home </NavLink></div>
        <div className="boxcard">
        <div class="card">
        <div class="container">
          <h4><b>Boopalan Jayaraman</b></h4> 
          <p>Associate Vice President - Technology </p> 
        </div>
        </div>
        <div class="card">
        <div class="container">
          <h4><b>Santhoshmathavan K  </b></h4> 
          <p>Developer Intern at Payoda Technology Inc
          </p> 
        </div>
        </div>
        <div class="card">
        <br></br>
        <div class="container">
          <h4><b>Karthikprabhu </b></h4> 
          <p>Developer Intern at Payoda Technology Inc
          </p> 
        </div>
        </div>
        <div class="card">
        <br></br>
        <div class="container">
          <h4><b>Payal Shah</b></h4> 
          <p>Developer Intern at Payoda Technology Inc
          </p> 
        </div>
        </div>
        </div>
        </div>

    );
}
 
export default Contact;