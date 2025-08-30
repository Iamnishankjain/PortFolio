import React from 'react'
import projects from './Data/projects.json'

function Project() {
  return (
    <>
      <div className="container project my-3">
        <h1 className='heading'>Projects</h1>
        <div className="row d-flex justify-content-center align-items-center" id='project'>
          {
            [...projects].reverse().map((project) => (
              <div
                key={project.key}
                className='my-3 col-sm-6 col-md-4 col-lg-3 mx-3'
                data-aos="flip-right"
                data-aos-duration="500"
              >
                <div className="card bg-dark text-light project-card h-100 d-flex flex-column">
                  <div className="Project-img d-flex justify-content-center align-items-center p-3">
                    <img
                      src={`/assets/project/${project.imageSrc}`}
                      className="card-img-top project-imgtag"
                      alt={project.title}
                    />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text flex-grow-1">{project.description}</p>
                    <a href={project.go} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">Go</a>
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
