import React, { useState, useEffect} from 'react'
import { useStaticQuery, graphql } from "gatsby";
import GridItem from "./GridItem";

interface ComponentProps {
  
}
 const Grid = () => {
   const [worksArr, setWorksArr] = useState([])
   const [worksType, setWorksType] = useState(["freelance", "personal", "designs"])

    // const data = useStaticQuery(graphql`
    //   query WorkItemsQuery {
    //     worksItemsJson {
    //       edges {
    //         node {
    //             name
    //             description
    //             imgSrc
    //         }
    //       }
    //     }
    //   }
    // `)
  

  const data = useStaticQuery(graphql`
   {
    allJson {
    edges {
      node {
        name
        description
        imgSrc
        type
      }
    }
  }
}`)
  
  useEffect(() => {
    if(data) {
    let newWorksArr = [];
    for(let x = 0; x < data.allJson.edges.length; x++) {
      // Loop through redux state
      for(let t = 0; t < worksType.length; t++) {
        if(data.allJson.edges[x].node.type === worksType[t]) {
          newWorksArr.push(data.allJson.edges[x])
        }
      }
    }
    setWorksArr(newWorksArr)
  }
  }, [data])



  return (
    <div className="works-grid">
      {worksArr.length !== 0 && worksArr.map((item: any, index: number) => <>
          <GridItem 
          key={index} 
          name={item.node.name}
          description={item.node.description}
          imgSrc={item.node.imgSrc}
          type={item.node.type}
          />
      </>
         )
      }
    </div>
  )
}

export default Grid;