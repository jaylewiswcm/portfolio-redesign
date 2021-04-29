import React from 'react'
// Components
import Technology from "../Technology";
import BackBtn from "../../buttons/backBtn";

 const Info:React.FC = () => {
  return (
    <div className="projects-p-container">
      <p>This site was a personal development project of mine which I collaborated with my girlfriend in order to keep track of your travels. We  wanted a space to share budget tips and places we saw. We loved photography so wanted a place to hold all our favourite photos from the different places we had been.</p>
     <img className="page-img"src="../../images/works/bouncingborders/full-page@2x.jpg" alt="Page spread"/>

    <BackBtn text="see other projects"/>
    <Technology tech={['HTML', 'PHP', 'SASS', 'WordPress' , '', 'Mailchimp']}/>
    </div>
  )
}

export default Info;