import React, { useEffect, useState } from 'react'
import { Link } from "gatsby";
import {AnchorLink} from "gatsby-plugin-anchor-links";
// Components
import PageHeadImage from "../titleImage/PageHeadImage";
import TitleBtn from "./TitleBtn";

interface ComponentProps {
  page: string
  title : string
  subHeading : string
  emHeading : string
  link: string
  anchor: {
    slug: string
    text: string
  }
}

 const PageTitle = ({page, title , subHeading, emHeading, link, anchor } :ComponentProps) => {
   const [flexClass, setFlexClass] = useState("")

   useEffect(() => {
    if(page === "home") {
      setFlexClass("flex-row")
    } else {
      setFlexClass("flex-col")
      
    }
   }, [page])
  return (
    <div className="heading-wrapper">
      <div className={ page === "home" ? "home-title" : "title-wrapper"}>
       <h1 className="page-title">{title}</h1> 
       <span className={flexClass}>
          <h2 className="page-subHeading">{subHeading}</h2>
          { flexClass === "flex-row" ?
          <Link to={link !== "" ? link : "/"} className="anchor-link color-orange push-right">
            <span className="btn-bg"></span>
            <p>{emHeading}</p>
          </Link>
            :
           <h2 className="page-emHeading heading-spacing">{emHeading}
             { link !== "" && <AnchorLink to={link !== "" ? link : "/"}>click here</AnchorLink> }
             </h2>
             }
        </span>
        <TitleBtn anchor={anchor}/>
      </div>
      <PageHeadImage page={page}/>
    </div>
  )
}

export default PageTitle;