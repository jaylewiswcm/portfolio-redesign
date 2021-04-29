import React from 'react'
import {Link} from "gatsby"
import bannerImage from "../../images/background/orange-banner.svg";

 const BioBanner = () => {
   
  return (
    <div className="banner-wrapper">
      <div className="banner-info">
        <h4>Do you like the sound of me?</h4>
        <p>Get in touch with me if you have a project in mind, 
        I’m happy to help whether it’s some consultation or 
        leading the design and development of the project.</p>
      <Link to="/contact">Get in touch</Link>
      </div>
      <div className="banner-image">
        <img src={bannerImage} alt="Banner"/>
      </div>
    </div>
  )
}

export default BioBanner;