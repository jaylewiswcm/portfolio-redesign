import React from 'react'
// Components 
import Links from "../Links";

 const ProHeader = () => {
  return (
    <div className="project-heading">
      <h2>Pitchers</h2>
      <h3>Sports Bar and Grill</h3>
      <div className="photo-wrapper">
        <img src="../../images/works/pitchers/home@2x.jpg" alt="Project Photo"/>
      </div>
      <Links 
      github="https://github.com/JayLewis1/pitchers-sports-bar-and-grill"
      url="https://pitchers-sports-bar-and-grill.netlify.app/"
      anchor="pitchers"/>
    </div>
  )
}

export default ProHeader;
