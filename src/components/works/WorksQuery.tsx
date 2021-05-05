import React from 'react'
import { graphql, StaticQuery } from "gatsby"
// Components 
import Grid from "./Grid";
interface ComponentProps {
  page: string
}
const WorksQuery = ({page}: ComponentProps) => {

return (
    <StaticQuery query={
    graphql`
    query WorksWorksQuery{
      allWorkItemsJson {
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
    }` 
    }
    render={data => (
      <Grid workData={data} page={page}/>
    )}/>
)
}

export default WorksQuery;