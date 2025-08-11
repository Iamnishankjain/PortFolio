import React from 'react'
import projects from './Data/projects.json'

function Project() {
  return (
    <>
      <div className="container project my-3">
        <h1 className='heading'>Projects</h1>

        {/* ✅ Grid wrapper instead of Bootstrap's row/col */}
        <div className="project-grid" id='project'>
          {
            projects.map((project) => (
              <div key={project.key} data-aos="flip-right" data-aos-duration="500">
                <div className="card bg-dark text-light project-card">
                  <div className="Project-img d-flex justify-content-center align-item-center p-3">
                    <img
                      src={`/assets/project/${project.imageSrc}`}
                      className="card-img-top project-imgtag"
                      alt={project.title}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href={project.go} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Go</a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Project
