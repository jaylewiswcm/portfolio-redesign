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
          src="../../images/works/bouncingborders/home@2x.jpg"
          alt="Bouncing Borders"
          className="work-image"
          placeholder="blurred"
        />
        }
          { 
      page === "work" &&
      <StaticImage
          src="../../images/works/bouncingborders/home@2x.jpg"
          alt="Bouncing Borders"
          className="work-image"
          placeholder="blurred"
        />
      // <img className="work-image"src={`../../images/works/bouncingborders/home@2x.jpg`} alt="BouncingBorders"/>
      // <img 
      //   className="work-image"
      //   src={`../../images/works/bouncingborders/home@2x.jpg`} alt="BouncingBorders"/>
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
    {/* { 
      page === "home" &&

    <div className="head-image-wrapper">
      <img className="background-square" src={square} alt="background square"></img>
      {/* <img className="work-image"src={`../../images/works/bouncingborders/home@2x.jpg`} alt="BouncingBorders" /> */}
      {/* <GatsbyImage image={image} alt={data.blogPost.author} className="work-image"/> */}
      {/* <ImgQuery /> */}
      {/* <StaticImage
          src="../../images/works/bouncingborders/home@2x.jpg"
          alt="Bouncing Borders"
          className="work-image"
          placeholder="blurred"
    
        />
    </div>
        }
    {
      page === "work" && 
    <div className="head-image-wrapper-full">
      <img className="work-image"src={`../../images/works/bouncingborders/home@2x.jpg`} alt="BouncingBorders"/>
    </div>
    }
    {
      page === "me" && 
    <div className="head-image-wrapper-full">
      <img className="me-image" src='../../images/me/me@2x.jpg' alt="Me"/>
      <img className="background-square" src={square} alt="backgroun square"></img>
    </div>
    } */}
  </>
  )
}


export default PageHeadImage;