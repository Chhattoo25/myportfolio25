import React from 'react'
import About from '../components/About/About'
import Github from '../components/Github/Github'
import Header from '../components/Header'
import Project from '../components/Projects/Project'
import Skills from '../components/Skills/Skills'

const Home = () => {
  return (
    <>
    <Header/>
    <About/>
    <Skills/>
    <Project/>
    <Github/>
    </>
  )
}

export default Home