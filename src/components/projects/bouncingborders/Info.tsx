import React from 'react'
// Components
import Technology from "../aComponents/Technology";
import AnchorLinkBtn from "../../buttons/AnchorLinkBtn";

 const Info:React.FC = () => {
  return (
    <div className="projects-p-container">
      <p>This site was a personal development project of mine which I collaborated with my girlfriend in order to keep track of your travels. We  wanted a space to share budget tips and places we saw. We loved photography so wanted a place to hold all our favourite photos from the different places we had been.</p>
     <img className="page-img"src="../../images/works/bouncingborders/full-page@2x.jpg" alt="Page spread"/>

    <AnchorLinkBtn color="blue" url="/work/#my-works" text="See other projects"/>
    <Technology tech={['HTML', 'PHP', 'SASS', 'WordPress' , '', 'Mailchimp']}/>
    </div>
  )
}

export default Info;