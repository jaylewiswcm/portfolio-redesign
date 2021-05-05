import React from 'react'
import WorksNav from "./WorksNav";
import WorksQuery from "./WorksQuery";

interface ComponentProps {
  page: string
}
 const Works = ({page}: ComponentProps) => {
  return (
    <div className='works-container'> 
      <WorksNav />
      <WorksQuery  page={page}/>
    </div>
  )
}

export default Works;