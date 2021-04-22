import React, { useState } from 'react'
// Svgs 
import github from "../../../images/socials/github.svg"
import website from "../../../images/workIcons/website.svg"
import tech from "../../../images/workIcons/tech.svg"

 const ProHeader = () => {
   const [linkHover, setLinkHover] = useState("")
  return (
    <div className="project-heading">
      <h2>Dirt</h2>
      <h3>An Alice in Chains Tribute Band</h3>
      <div className="photo-wrapper">
        <img src="../../images/works/dirt/home@2x.jpg" alt="Project Photo"/>
      </div>
      <div className="links-wrapper">
        <a 
          href="https://github.com/JayLewis1/dirt" 
          target="_blank"
          onMouseOver={() => setLinkHover("github")}
          onMouseOut={() => setLinkHover("")}>
          <img src={github} alt="Github"/>
          { linkHover === "github" && 
            <span className="hover-link">
              <p>Github</p>
            </span>
          }
        </a>
        <a 
          href="http://www.dirtaliceinchains.com/" 
          target="_blank"
          onMouseOver={() => setLinkHover("site")}
          onMouseOut={() => setLinkHover("")}>
          <img src={website} alt="Site"/>
          { linkHover === "site" && 
            <span className="hover-link">
              <p>Site</p>
            </span>
          }
        </a>
        <a 
          href="/"
          onMouseOver={() => setLinkHover("tech")}
          onMouseOut={() => setLinkHover("")}>
          <img src={tech} alt="Technology"/>
          { linkHover === "tech" && 
            <span className="hover-link">
              <p>Technology</p>
            </span>
          }
        </a>
      </div>
    </div>
  )
}

export default ProHeader;
