import React from 'react'
import pdf from '../components/pdf/FSD_NISHANK_RESUME.pdf'
import hero from './Data/hero.json'
const Home = () => {
  return (
    <div className="container home">
      <div className="left">
        <h1>Lorem ipsuing elit. Facere, veritatis.</h1>
        <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning">Download Resume</a>
      </div>
      <div className="right">
        <div className="img">
          <img src={`/assets/${hero.imgSrc}`} alt="hero" />
        </div>
      </div>
    </div>
  )
}

export default Home;
