import React from 'react'
// Components 
import Links from "../Links";

 const ProHeader = () => {
  return (
    <div className="project-heading">
      <h2>Dirt</h2>
      <h3>An Alice in Chains Tribute Band</h3>
      <div className="photo-wrapper">
        <img src="../../images/works/dirt/home@2x.jpg" alt="Project Photo"/>
      </div>
      <Links 
      github="https://github.com/JayLewis1/dirt"
      url="http://www.dirtaliceinchains.com/"
      anchor="dirt"/>
    </div>
  )
}

export default ProHeader;
