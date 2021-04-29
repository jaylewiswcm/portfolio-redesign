import React from 'react'
// Components
import Links from "../Links";

 const ProHeader = () => {
  return (
    <div className="project-heading">
      <h2>FolioTune</h2>
      <h3>Collaborate, share and create song ideas</h3>
      <div className="photo-wrapper">
        <img src="../../images/works/foliotune/home@2x.jpg" alt="Project Photo"/>
      </div>
      <Links 
      github="https://github.com/JayLewis1/social-song-creator"
      url="https://heuristic-mestorf-5c09ca.netlify.app/"
      anchor="foliotune"/>
    </div>
  )
}

export default ProHeader;
