import React, { useEffect, useState, Fragment } from 'react'
import { useStaticQuery, graphql } from "gatsby";
// Components
import GridItem from "./GridItem";
import ItemWithInfo from "./ItemWithInfo";
import EmptyGridState from "./EmptyGridState";
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
  const [emptyState, setEmptyState] = useState(false)

  useEffect(() => {
    if(typeOfWork.length === 0) {
      setEmptyState(true)
      console.log("empty")
    } else {
      setEmptyState(false)
    }
    console.log(typeOfWork);
  },[typeOfWork])

  const data = useStaticQuery(graphql`
   {
    allJson {
    edges {
      node {
        name
        description
        imgSrc
        type
        slug
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
            slug={item.node.slug}
            />
          }
          { type === item.node.type && page === "works" && 
            <ItemWithInfo 
            key={index} 
            name={item.node.name}
            description={item.node.description}
            imgSrc={item.node.imgSrc}
            type={item.node.type}
            slug={item.node.slug}
            />
          }
        </Fragment>
      )}
      </Fragment>
        )
      }
      {
        emptyState === true && 
        <EmptyGridState />
      }
    </div>
  )
}

export default connector(Grid);