import React from 'react'

interface ComponentProps {
  data: {
    allSkillsJson : {
      edges : Array<{}>
    }
  }
}
 const SkillsList = ({data}: ComponentProps) => {  
  return (
    <div>
      <p>Coming very soon</p>
       {/* {
         data.allSkillsJson.edges.map((item: any) => 
        <li key={item.node.type}>{item.node.type}</li>)
       } */}
    </div>
  )
}
export default SkillsList
