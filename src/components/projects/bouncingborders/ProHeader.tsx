import React from 'react'
// Components
import Links from "../Links";

 const ProHeader = () => {
  return (
    <div className="project-heading">
      <h2>Bouncing Borders</h2>
      <h3>Couples travel blog</h3>
      <div className="photo-wrapper">
        <img src="../../images/works/bouncingborders/home@2x.jpg" alt="Project Photo"/>
      </div>
      <Links 
      github="https://github.com/JayLewis1/bouncingborderswp"
      url="http://bouncingborders.com/"
      anchor="bouncingborders"/>
    </div>
  )
}

export default ProHeader;
