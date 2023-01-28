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
          src="../../../images/works/middletons/blog@2x.jpg"
          alt="Middletons Blog page"
          className="page-img"
          placeholder="blurred"
        />
      <StaticImage
          src="../../../images/works/middletons/user-locator@2x.jpg"
          alt="Middletons User locator form"
          className="page-img"
          placeholder="blurred"
        />
      <StaticImage
          src="../../../images/works/middletons/store-appointments@2x.jpg"
          alt="Middletons store appointments"
          className="page-img"
          placeholder="blurred"
        />
    <AnchorLinkBtn color="blue" url="/work/#my-works" text="See other projects"/>
    <Technology tech={['HTML', 'CSS', 'JavaScript', 'Liquid', 'Shopify', 'Sass', 'Apis']}/>
    </div>
  )
}

export default Info;