import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Education from '../Education/Education'
import Skills from '../Skills/Skills'
import Certifications from '../Certifications/Certifications'
import Involvement from '../Involvement/Involvement'
import Research from '../Research/Research'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <>
     <Hero></Hero>
     <Education></Education>
     <Skills></Skills>
     <Research></Research>
     <Involvement></Involvement>
     <Certifications></Certifications>
     <Contact></Contact>
    </>
  )
}

export default Home
