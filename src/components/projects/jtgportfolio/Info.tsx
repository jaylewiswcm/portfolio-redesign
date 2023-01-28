import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
// Components
import Technology from "../aComponents/Technology";
import AnchorLinkBtn from "../../buttons/AnchorLinkBtn";

 const Info:React.FC = () => {
  return (
    <div className="projects-p-container">
      <p>A friend of mine came to me and asked whether I could create a simple, professional website to display his design work. He already had an instagram but wanted something he could send to employeers.</p>
      <p>He liked the grid layout that instagram provided and wanted the overall site design to be subtle so his work could stand out.</p>
      <StaticImage
          src="../../../images/works/jtg-portfolio/page.jpg"
          alt="James Thomson-Gorwill full page"
          className="page-img"
          placeholder="blurred"
        />
    <AnchorLinkBtn color="blue" url="/work/#my-works" text="See other projects"/>
    <Technology tech={['HTML', 'Next.js', 'JavaScript', 'Typescript', 'CSS', 'SASS']}/>
    </div>
  )
}

export default Info;