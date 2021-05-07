import React, { useState } from 'react'
// Svg
import DownArrow from "../../../images/icons/down-arrow.svg"
interface ComponentProps {
  data: {
    allSkillsJson : {
      edges : Array<{}>
    }
  }
}


 const SkillsList = ({data}: ComponentProps) => {  
   const [selectedSkillset, setSkillSet] = useState(-1)

   const toggleSkills = (number: number) => {
     if(number !== selectedSkillset) {
      setSkillSet(number);
     } else {
      setSkillSet(-1);
     }
  }
  
  return (
    <div>
       {
         data.allSkillsJson.edges.map((item: any , index: number) => 
        <li key={item.node.type}>
          <div className="list-top">
            <p className="skill-category">{item.node.type}</p>
            <p className="push-right">{selectedSkillset !== index  && item.node.skills[0]}</p>
            <button onClick={() => toggleSkills(index)}>
              <img className={selectedSkillset === index ? "up-arrow" : "down-arrow"}src={DownArrow} alt="Arrow"/>
            </button>
          </div>
          <div className={selectedSkillset === index ? "increase-height" :"list-bottom"} aria-hidden={selectedSkillset === index ? false : true}
            >
            <ul className="category-grid">
              { item.node.skills.map((skill: string) => 
                <li><p>{skill}</p></li>
              ) }
            </ul>
          </div>
        </li>)
       }
    </div>
  )
}
export default SkillsList
