import React, { useEffect, useState, Fragment } from 'react'
import { useStaticQuery, graphql } from "gatsby";
// Components
import GridItem from "./GridItem";
import ItemWithInfo from "./ItemWithInfo";
import EmptyGridState from "./EmptyGridState";
import GreenRect from "../../components/background/GreenRect";
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
  workData: any
};

 const Grid = ({ typeOfWork, page, workData } :Props) => {
  const [emptyState, setEmptyState] = useState(false)
  const [worksArr, setWorksArr] = useState(workData.allWorkItemsJson.edges)

  useEffect(() => {
    if(typeOfWork.length === 0) {
      setEmptyState(true)
    } else {
      setEmptyState(false)
    }
    loopFunc(workData.allWorkItemsJson.edges);
  },[typeOfWork])

  const loopFunc = (array: any) => {
    let newArray =[];
    for(let x = 0; x < array.length; x++) {
      newArray.push(array[x]);
    }
    setWorksArr(newArray);
  } 
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
         <GreenRect />
    </div>
  )
}

export default connector(Grid);