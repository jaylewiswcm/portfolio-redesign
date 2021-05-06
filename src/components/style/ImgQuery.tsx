import React from 'react'
import { graphql } from "gatsby";
import Img from "gatsby-image";

const ImgQuery:React.FC = () => {

  const query = graphql`
    query ImgQuery {
      file(relativePath: { eq: "works/bouncingborders/home@2x.jpg" }) {
        childImageSharp {
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    `
console.log(query)

  return (
    <div>
      {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
    </div>
  )
}


export default ImgQuery;