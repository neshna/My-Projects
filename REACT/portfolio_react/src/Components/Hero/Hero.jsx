import React from 'react'
import './Hero.css'
import about_profile from '../../assets/about_profile.svg'

const Hero = () => {
  return (
    <div className="heroContainer" id="About">
    <img className = "profileImg" src={about_profile} alt="Profile Image"/>
    <div className="heroText">
        <h1>Hello, I'm Neshana Priya </h1>
        <h2>A Front-End React Developer</h2>
        <p>
            I’m a Front-End Developer who turns ideas into interactive, visually appealing, and responsive websites. 
            I specialize in building seamless user experiences using HTML, CSS, JavaScript, and React. Passionate about 
            clean code and modern design, I aim to create interfaces that are both functional and delightful to use.
        </p>
    
          <a href="/Neshana Priya S - Resume.pdf" download className ="heroButtonContainer">
          <button className="heroButton">Resume</button>
          </a>
            
  
        
    </div>
    </div>
    
  )
}

export default Hero
