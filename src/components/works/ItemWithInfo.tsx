import React from 'react'
import { Link } from "gatsby";

interface ComponentProps {
  name: string
  description: string
  imgSrc : string
  type : string
}

const ItemWithInfo = ({name, imgSrc, description }:ComponentProps) => {
  return (
      <div className="grid-item-w-info">
      <Link to={`/${name}`}>
        <img src={`../../images/${imgSrc}`} alt="Works Image" />
        <span className="works-title">
          <h6>{name}</h6>
          <p>{description}</p>
        </span>
      </Link>
      </div>
  )
}

export default ItemWithInfo;