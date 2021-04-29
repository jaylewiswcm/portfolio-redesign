import React from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";

interface ComponentProps {
  text : string
}

 const BackBtn = ({text} : ComponentProps) => {
  return (
    <AnchorLink className="anchor-link" to="/work#my-works">
    <span className="btn-bg"></span>
    <p>{text}</p>
    </AnchorLink>
  )
}

export default BackBtn;