import React from 'react'
import experience from './Data/experience.json'
const Experience = () => {
  return (
    <>
    <div className="container ex">
      <h1>Experience</h1>
      {
        experience.map((data)=>{
          return(
            <>
            <div key={data.id} className='ex-items text-center my-5'>
              <div className="left">
                <img className="img1" src={`/assets/${data.imageSrc}`} alt="" />
                <img className='img2' src={`/assets/${data.supportSrc}`} alt="" />
                </div>
              <div className="right">
                <h2>{data.role}</h2>
                <h4><span style={{color: 'yellowgreen'}}>{data.startDate}-{data.endDate} </span ><span style={{color: 'yellow'}}>{data.location}</span></h4>
                <h4 style={{color: 'yellow'}}>Supported By: {data.supportby}</h4>
                <h5 style={{color: 'yellow'}}>{data.experiences[0]}</h5>
                <h5 style={{color: 'yellow'}}>{data.experiences[1]}</h5>
                <a href={data.cert} download="cert.pdf" className="btn btn-outline-warning">Download Certificate</a>
                </div>
            </div>
            </>
          )
        })
      }
    </div>
    </>
  )
}

export default Experience
