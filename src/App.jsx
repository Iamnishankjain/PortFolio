import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
import './App.css'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
    </>
  );
}

export default App
