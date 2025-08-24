import React from 'react'
import  './Skill.css'
import Git from '../../assets/Git.svg'
import CSS3 from '../../assets/CSS3.svg'
import HTML5 from '../../assets/HTML5.svg'
import react from '../../assets/react.svg'
import SQL from '../../assets/SQL.svg'
import JavaScript from '../../assets/JavaScript.svg'
import theme_pattern from '../../assets/theme_pattern.svg'

 const skillsData = [
  {
    name: "HTML",
    icon: HTML5,
    topics: ["Semantic HTML5", "Forms & Validation", "SEO Basics", "Accessibility"]
  },
  {
    name: "CSS",
    icon: CSS3,
    topics: ["Flexbox & Grid", "Responsive Design", "Animations", "Variables"]
  },
  {
    name: "JavaScript",
    icon: JavaScript,
    topics: ["ES6+", "DOM Manipulation", "Fetch API", "Async/Await"]
  },
  {
    name: "React",
    icon: react,
    topics: ["Hooks", "Components", "Props & State", "Routing"]
  },
  {
    name: "Git",
    icon: Git,
    topics: ["Version Control", "Branching", "Merging", "GitHub Workflow"]
  },
  {
    name: "SQL",
    icon: SQL,
    topics: [
      "Database & Tables",
      "Primary & Foreign Keys",
      "SELECT, INSERT, UPDATE, DELETE",
      "WHERE, JOIN, GROUP BY"
    ]
  }
];



const Skill = () => {
  return (
    <section className="skills-section" id="Skills">
      <div className="skills-title" >
        <h1 >My Skills</h1>
        <img src={theme_pattern} alt="pattern Image"/>
      </div>
      
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={`${skill.name} Logo`} className="skill-logo" />
            <h2>{skill.name}</h2>
            <ul>
              {skill.topics.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Skill
