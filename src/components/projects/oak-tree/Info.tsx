import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
// Components
import Technology from "../aComponents/Technology";
import AnchorLinkBtn from "../../buttons/AnchorLinkBtn";

 const Info:React.FC = () => {
  return (
    <div className="projects-p-container">
      <p>A friend of mine came to me and asked whether I could create a simple, professional website to display his design work. He already had an instagram but wanted something he could send to employeers.</p>
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