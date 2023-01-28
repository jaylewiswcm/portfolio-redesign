import React, {useState, useEffect} from 'react'
import { StaticImage } from "gatsby-plugin-image"
// Images
import square from "../../images/background/blue-square.svg";

interface ComponentProps {
  page: string
  
}

 const PageHeadImage = ({page, }:ComponentProps) => {
  const [className, setClassName] = useState("head-image-wrapper");
  useEffect(() => {
    if(page === "home"){
      setClassName("head-image-wrapper");
    } else {
      setClassName("head-image-wrapper-full");
    }
  },[page])
  return (  
    <>
     <div className={className}>
      <img className="background-square" src={square} alt="background square" style={page === "work" ? {display: "none"}: {display: "block"}}></img>
        { 
      page === "home" &&
      <StaticImage
          src="../../images/works/middletons/blog-home.jpg"
          alt="Middletons Mobility Blog"
          className="work-image"
          placeholder="blurred"
        />
        }
          { 
      page === "work" &&
      <StaticImage
      src="../../images/works/oak-tree/home@2x.jpg"
      alt="Oak Tree Mobility Home page"
      className="work-image"
      placeholder="blurred"
    />
        }
          { 
      page === "me" &&
      <StaticImage
          src="../../images/me/me@2x.jpg"
          alt="Me"
          className="me-image"
          placeholder="blurred"
        />
        }
    </div>
  </>
  )
}


export default PageHeadImage;