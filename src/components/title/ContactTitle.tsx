import React, { useState } from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";

interface ComponentProps {
  title: string
  emHeading: string
  number: string
  email: string
}

const ContactTitle = ({title, emHeading, number, email}: ComponentProps) => {
  const [hoverCopy, setHoverCopy] = useState("");

  const scrollToForm = () => {

  }

  return (
    <div className="contact-heading"> 
       <h1 className="page-title">{title}</h1> 
       <h2 className="page-emHeading">{emHeading}</h2>
       <div className="details-wrapper">
          <span className="contact-detail border-right">
            <p className="small-p">Call me on:</p>
            <p 
              className="detail-p"
              onMouseOver={() => setHoverCopy(number)}
              onMouseOut={() => setHoverCopy("")}
            >{number}</p>
            <span className='copy-popup' style={hoverCopy === number ? {display: "block"} : {display: "none"}}>
              <p>Copy</p>
            </span>
          </span>
          <span className="contact-detail">
            <p className="small-p">Email me:</p>
            <p 
              className="detail-p"
              onMouseOver={() => setHoverCopy(email)}
              onMouseOut={() => setHoverCopy("")}
              >{email}</p>
                <span className='copy-popup' style={hoverCopy === email ? {display: "block"} : {display: "none"}}>
              <p>Copy</p>
            </span>
          </span>
       </div>
       <AnchorLink to="/contact#form" className="link-to-form"> 
        <span className="btn-bg"></span>
        <p>Send a message</p>
       </AnchorLink >
    </div>
  )
}

export default ContactTitle