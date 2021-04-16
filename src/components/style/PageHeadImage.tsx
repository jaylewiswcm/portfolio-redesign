import React from 'react'
// Images
import square from "../../images/background/blue-square.svg";

interface ComponentProps {
  page: string
}

 const PageHeadImage = ({page}:ComponentProps) => {
  return (
    <>
    { 
      page === "home" &&

    <div className="head-image-wrapper">
      <img className="background-square" src={square} alt="backgroun square"></img>
      <img className="work-image"src={`../../images/works/bouncingborders/home@2x.jpg`} alt="BouncingBorders"/>
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
    }
  </>
  )
}

export default PageHeadImage;