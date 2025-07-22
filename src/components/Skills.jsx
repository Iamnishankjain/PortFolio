import React from "react";
import skills from "./Data/skills.json"
const Skills = () => {
  return (
    <>
      <div className="container skills" id="skills">
        <h1 className='heading'>Skills</h1>
        <div className="items">
          {skills.map((skill) => (
              <div className="item" key={skill.id} data-aos="flip-left" data-aos-duration="500">
                <img src={`/assets/${skill.imageSrc}`} alt={skill.title} />
                <h3><span className="skill-name">{skill.title}</span></h3>
              </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
