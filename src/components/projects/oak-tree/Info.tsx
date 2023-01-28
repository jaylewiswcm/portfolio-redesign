import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
// Components
import Technology from "../aComponents/Technology";
import AnchorLinkBtn from "../../buttons/AnchorLinkBtn";

 const Info:React.FC = () => {
  return (
    <div className="projects-p-container">
       <br/>
      <br/>
      <StaticImage
          src="../../../images/works/oak-tree/page.jpg"
          alt="Oak Tree full page"
          className="page-img"
          placeholder="blurred"
        />
    <AnchorLinkBtn color="blue" url="/work/#my-works" text="See other projects"/>
    <Technology tech={['Next.js', 'Javascript', 'Jsx', 'Typecript', 'HTML', 'CSS', 'SASS', 'Strapi (Headless CMS)', 'APIs']}/>
    </div>
  )
}

export default Info;