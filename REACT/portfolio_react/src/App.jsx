import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Skill from './Components/Skill/Skill'
import Projects from './Components/Projects/Projects'
import Contacts from './Components/Contacts/Contacts'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skill />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App



