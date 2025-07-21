import React from "react";
import skills from "./Data/skills.json"
const Skills = () => {
  return (
    <>
      <div className="container skills">
        <h1>Skills</h1>
        <div className="items">
          {skills.map((skill) => (
              <div className="item" key={skill.id}>
                <img src={`/assets/${skill.imageSrc}`} alt={skill.title} />
                <h3>{skill.title}</h3>
              </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
