import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

 const PhotoGallery = () => {
  return (
    <StaticImage
    src="../../images/gallery/venice@2x.jpg"
    alt="Venice"
    className="photographyImg"
    placeholder="blurred"
  />
  )
}

export default PhotoGallery;