import React, { useEffect, useState } from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";
// SVGs
import copy from "../../images/icons/copy.svg";
import copied from "../../images/icons/copied.svg";
// Components
import Copied from "../contact/Copied";
interface ComponentProps {
  title: string
  emHeading: string
  number: string
  email: string
}

const ContactTitle = ({title, emHeading, number, email}: ComponentProps) => {
  const [hoverCopy, setHoverCopy] = useState("");
  const [copiedDetail, setDetailToCopy ] = useState("")

  useEffect(() => {
    if(copiedDetail !== "") {
      const interval = setInterval(() => {
        setDetailToCopy("")
      }, 3000);
      return () => clearInterval(interval);
    }
}, [copiedDetail]) 

  const copyString = (string: string) => {
    navigator.clipboard.writeText(string)
    setDetailToCopy(string);
  }

  return (
    <div className="contact-heading"> 
       <h1 className="page-title">{title}</h1> 
       <h2 className="page-emHeading">{emHeading}</h2>
       <div className="details-wrapper">
          <span className="contact-detail border-right">
            <p className="small-p">Call me on:</p>
            <button onClick={() => copyString(number)}>
            <p 
              className="detail-p"
              onMouseOver={() => setHoverCopy(number)}
              onMouseOut={() => setHoverCopy("")}
            >{number}</p>
            <span className='copy-popup' style={hoverCopy === number ? {display: "block"} : {display: "none"}}>
             <img src={copy} alt="Copy"/>
            </span>
            </button>
            { copiedDetail === number && <Copied />}
          </span>
          <span className="contact-detail">
            <p className="small-p">Email me:</p>
            <button onClick={() => copyString(email)}>
            <p 
              className="detail-p"
              onMouseOver={() => setHoverCopy(email)}
              onMouseOut={() => setHoverCopy("")}
              >{email}</p>
               <span className='copy-popup' style={hoverCopy === email ? {display: "block"} : {display: "none"}}>
               <img src={copy} alt="Copy"/>
            </span>
        </ button>
        { copiedDetail === email && <Copied />}
          </span>
       </div>
       <AnchorLink to="/contact#form" className="anchor-link"> 
        <span className="btn-bg"></span>
        <p>Send a message</p>
       </AnchorLink >
    </div>
  )
}

export default ContactTitle