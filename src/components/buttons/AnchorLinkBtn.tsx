import React from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";

interface ComponentProps {
  text : string
  color: string
  url: string
}

 const AnchorLinkBtn = ({text, color, url} : ComponentProps) => {
  return (
    <AnchorLink className={`anchor-link color-${color}`} to={url}>
    <span className="btn-bg"></span>
    <p>{text}</p>
    </AnchorLink>
  )
}

export default AnchorLinkBtn;