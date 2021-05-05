import React from 'react'
import AnchorLinkBtn from "../../buttons/AnchorLinkBtn";
// Components
import Technology from "../aComponents/Technology";

 const Info = () => {
  return (
    <div className="projects-p-container">
      {/* <p>A huge part of a band these days is to have a place online to engage listeners, followers and promoters. The aim of this site, which was created for a family member, was a place for the band to show video clips and photos of previous shows,  tour dates, who the band are and an easy method for contacting them.</p>
      <img className="page-img"src="../../images/works/dirt/page@2x.jpg" alt="Page spread"/> */}
    <AnchorLinkBtn color="blue" url="/work/#my-works"  text="See other projects"/>
    <Technology tech={[
      'HTML', 
      'Node.js', 
      'SASS', 
      'Express', 
      'JavaScript', 
      'GraphQL', 
      'React',
      'PostgreSQL',
      'Redux',
      'AWS']}/>
    </div>
  )
}

export default Info;