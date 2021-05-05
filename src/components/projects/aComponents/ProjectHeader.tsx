import React from 'react'
// Components 
import Links from "./Links";

interface ComponentProps {
  title: string
  subtitle: string
  github: string
  site: string
  slug: string
}

 const ProjectHeader = ({title, subtitle, github, site, slug}:ComponentProps) => {
  return (
    <div className="project-heading">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <img className="photo-wrapper" src={`../../images/works/${slug}/home@2x.jpg`} alt="Project Photo"/>
      <Links 
      github={github}
      url={site}
      anchor={slug}/>
    </div>
  )
}

export default ProjectHeader;