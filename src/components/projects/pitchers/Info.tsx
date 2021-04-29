import React from 'react'
// Components
import Technology from "../Technology";
import BackBtn from "../buttons/backBtn";

 const Info:React.FC = () => {
  return (
    <div className="projects-p-container">
      <p>My favourite bar in Chepstow mentioned they were interested in having a website, so while in lockdown I had plenty of time I got in touch and voluntered my skills to design and develop their site. They wanted a site that shows off the bar, shows menus, how to contact them and where they were.</p>
     <img className="page-img"src="../../images/works/pitchers/full-page@2x.jpg" alt="Page spread"/>

    <BackBtn text="see other projects"/>
    <Technology tech={['HTML', 'React', 'SASS', 'Gatsby']}/>
    </div>
  )
}

export default Info;