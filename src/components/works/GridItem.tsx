import React from 'react'
import { Link } from "gatsby";

interface ComponentProps {
  name: string
  description: string
  imgSrc : string
  type : string
  slug: string
}

//images
import oaktree from '../../images/works/oak-tree/home@2x.jpg'
import middletons from '../../images/works/middletons/home-hero@2x.png'
import dirt from '../../images/works/dirt/home@2x.jpg'
import bouncingborders from '../../images/works/bouncingborders/home@2x.jpg'
import pitchers from '../../images/works/pitchers/home@2x.jpg'
import jtg from '../../images/works/jtg-portfolio/home@2x.png'

const GridItem = ({name, imgSrc, slug }:ComponentProps) => {
 
  return (
      <div className="grid-item">
      <Link to={`/work/${slug}`}>
        { imgSrc.includes("oak") && <img src={oaktree} alt="Works Image" /> }
        { imgSrc.includes("middletons") &&  <img src={middletons} alt="Works Image" /> }
        { imgSrc.includes("dirt")  &&  <img src={dirt} alt="Works Image" /> }
        { imgSrc.includes("bouncingborders") && <img src={bouncingborders} alt="Works Image" /> }
        { imgSrc.includes("pitchers") && <img src={pitchers} alt="Works Image" />}
        { imgSrc.includes("jtg") && <img src={jtg} alt="Works Image" />}
      </Link>
      </div>
  )
}

export default GridItem;