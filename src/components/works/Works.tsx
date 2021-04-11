import React, { useState } from 'react'
import Grid from "./Grid";
import WorksNav from "./WorksNav";

 const Works = () => {
  const [types, setType] = useState(["freelance", "personal","designs"])


  const changeWorksType = (s: string) => {  
    let newTypes = [...types];
    let isTypeSelected = false;
    let index;
    for(let x = 0;x< types.length;x++ ) {
      if(types[x] === s) {
        isTypeSelected = true;
        index = types.indexOf(types[x]);
      }
    }
    if(isTypeSelected === true) {
      newTypes.splice(index);
    } else {
      newTypes.push(s);
    }
    setType(newTypes)
  }

  return (
    <div className='works-container'> 
      <WorksNav />
      <Grid />
    </div>
  )
}

export default Works;