import React, { useEffect, useState } from 'react'
import { Link } from "gatsby";
// Components
import PageHeadImage from "../style/PageHeadImage";
import TitleBtn from "./TitleBtn";

interface ComponentProps {
  page: string
  title : string
  subHeading : string
  emHeading : string
  link: string
}

 const PageTitle = ({page, title , subHeading, emHeading, link  } :ComponentProps) => {
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
             { link !== "" && <Link to={link !== "" ? link : "/"}>click here</Link> }
             </h2>
             }
        </span>
        <TitleBtn page={page}/>
      </div>
      <PageHeadImage page={page}/>
    </div>
  )
}

export default PageTitle;