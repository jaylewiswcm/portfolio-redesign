import React, { useState } from 'react'


 const WorksNav = () => {
  const [types, setType] = useState(["freelance", "personal","designs"])

  // Implement redux to change application state
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

  const worksNavFunction = (type: string) => {
    // Need to set up Redux
  }

  return (
    <div className='works-navigation'>
      <h3 className="center-title">Works</h3>
      <ul className="btn-list">
        <li><button onClick={() => changeWorksType("freelance")}>Freelance</button>
        </li>
        <li><button onClick={() => changeWorksType("personal")}>Personal</button></li>
        <li><button onClick={() => changeWorksType("designs")}>Designs</button></li>
      </ul>
    </div>
  )
}

export default WorksNav;