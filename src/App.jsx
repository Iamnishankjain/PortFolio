import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Home></Home>
        <Experience></Experience>
        <Skills></Skills>
        <Project></Project>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App
