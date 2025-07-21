import React, { useEffect, useRef } from 'react'
import pdf from '../components/pdf/FSD_NISHANK_RESUME.pdf'
import hero from './Data/hero.json'
import Typed from 'typed.js'
const Home = () => {
  const typedRef = useRef(null); // this is the <span> we'll type into

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my portfolio",
        "My name is Nishank Jain",
        "I'm a Software Developer",
        "with a strong foundation of",
        "Computer Science"
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy(); 
    };
  }, []);

  return (
    <div className="container home" id='home'>
      <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
        <h1><span ref={typedRef}></span></h1>
        <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
      </div>
      <div className="right" data-aos="fade-down-left" data-aos-duration="500">
        <div className="img">
          <img src={`/assets/${hero.imgSrc}`} alt="hero" />
        </div>
      </div>
    </div>
  )
}

export default Home;
