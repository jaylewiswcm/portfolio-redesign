import React, {useState} from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";
// Svgs 
import githubSvg from "../../images/socials/github.svg"
import website from "../../images/workIcons/website.svg"
import tech from "../../images/workIcons/tech.svg"
interface ComponentProps {
  github: string
  url: string
  anchor: string
}

 const Links = ({github, url, anchor}:ComponentProps) => {
  const [linkHover, setLinkHover] = useState("")
  return (
    <div className="links-wrapper">
    <a 
      href={github} 
      target="_blank"
      onMouseOver={() => setLinkHover("github")}
      onMouseOut={() => setLinkHover("")}>
      <img src={githubSvg} alt="Github"/>
      { linkHover === "github" && 
        <span className="hover-link">
          <p>Github</p>
        </span>
      }
    </a>
    <a 
      href={url}
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
    <AnchorLink
      to={`/work/${anchor}/#tech`}
     >
      <img src={tech} alt="Technology"  
      onMouseOver={() => setLinkHover("tech")}
      onMouseOut={() => setLinkHover("")}/>
      { linkHover === "tech" && 
        <span className="hover-link">
          <p>Technology</p>
        </span>
      }
    </AnchorLink>
  </div>
  )
}

export default Links