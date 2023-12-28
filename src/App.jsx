import React, { useState, useEffect } from 'react'
const url = 'https://course-api.com/react-tabs-project'
function App() {

const[isLoading,setLoading]=useState(true)
const [isJobs,setJobs]=useState([])
const [value,setValue]=useState(0)

const fetchDataFunc=async()=>{
  setLoading(true)
  const response=await fetch(url)
  if(response.ok){
    const data=await response.json()
    setLoading(false)
    setJobs(data)   
  }
}
 useEffect(()=>{
  fetchDataFunc()
 
 },[])
 console.log(isJobs);
if(isLoading){
  return <h1>Loading.....</h1>
}
const {id,company,order,title,dates,duties}=isJobs[value]
  return (
<section className="section">
   <div className="title">
     <h2>Experience</h2>
     <div className="underline"></div>
   </div>
   <div className="job-center">
  <div className="btn-container">
     {
      isJobs.map((job,index)=>{
        return <button className='btn' key={index} onClick={()=>setValue(index)}>{job.company}</button>
      })
     }
  </div>
      {/* btncontainer */}
      {/* job info */}
      <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {
            duties.map((duty,index)=>{
              return(
                 <div key={index} className="job-desc">
                    <p>{duty}</p>
                 </div>
              )
            })
          }
      </article>
   </div>
</section>
  )
}

export default App
