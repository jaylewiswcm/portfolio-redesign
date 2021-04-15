import React from 'react'
// // Images
import square from "../../images/background/blue-square.svg";

 const PageHeadImage = () => {
  return (
    <div className="head-image-wrapper">
     
      <img className="background-square" src={square} alt="backgroun square"></img>
      <img src={`../../images/works/bouncingborders/home@2x.jpg`} alt="BouncingBorders"/>
    </div>
  )
}

export default PageHeadImage;