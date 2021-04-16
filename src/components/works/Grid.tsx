import React, { useState, Fragment } from 'react'
import { useStaticQuery, graphql } from "gatsby";
// Components
import GridItem from "./GridItem";
import ItemWithInfo from "./ItemWithInfo";
// Redux
import { connect, ConnectedProps } from "react-redux";
import { InitialState } from "../../state/store";

const mapState = (state:InitialState) => ({
  typeOfWork: state.works.typeOfWork
})
const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
  page: string
};

 const Grid = ({ typeOfWork, page } :Props) => {
   console.log(page);
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

const [worksArr, _setWorksArr] = useState(data.allJson.edges)
  
  return (
    <div className="works-grid">
      {worksArr.length !== 0 && worksArr.map((item: any, index: number) => 
      <Fragment key={index}> 
      {  typeOfWork.map((type: string, index:number) => 
        <Fragment key={index}>
          { type === item.node.type && page === "home" && 
            <GridItem 
            key={index} 
            name={item.node.name}
            description={item.node.description}
            imgSrc={item.node.imgSrc}
            type={item.node.type}
            />
          }
          { type === item.node.type && page === "works" && 
            <ItemWithInfo 
            key={index} 
            name={item.node.name}
            description={item.node.description}
            imgSrc={item.node.imgSrc}
            type={item.node.type}
            />
          }
        </Fragment>
      )}
      </Fragment>
        )
      }
    </div>
  )
}

export default connector(Grid);