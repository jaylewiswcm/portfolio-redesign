import React from 'react'
import Grid from "./Grid";
import WorksNav from "./WorksNav";

interface ComponentProps {
  page: string
}
 const Works = ({page}: ComponentProps) => {
  console.log(page);
  return (
    <div className='works-container'> 
      <WorksNav />
      <Grid page={page}/>
    </div>
  )
}

export default Works;