import React, { useState } from 'react'
import mywork_data from '../../assets/mywork_data'
import theme_pattern from '../../assets/theme_pattern.svg'
import './Projects.css'

const Projects = () => {

  return (
    <div className='projectSection' id="Projects">
      <div className="projectTitle" >
        <h1 >My Projects</h1>
        <img src={theme_pattern} alt='patternImg' />
      </div>
      <div className="projectGrid">
        {mywork_data.map((project) => (
          <div className="projectCard" key={project.w_no}>
            <div className="projectCardInner">
              <div className="projectCardFront">
                <img src={project.w_img} alt="project" />
              </div>
              <div className="projectCardBack">
                <h1>{project.w_name}</h1>
                <ul>
                  {project.languages.map((language, index) => (
                    <li key={index}>{language}</li>
                  ))}
                </ul>
                <div className="projectCardBtn">
                    <button>Live</button>
                    <button>Source</button>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
