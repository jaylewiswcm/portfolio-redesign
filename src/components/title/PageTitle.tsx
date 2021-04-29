import React from 'react'
import { Link } from "gatsby";
import PageHeadImage from "../style/PageHeadImage";

interface ComponentProps {
  page: string
  title : string
  subHeading : string
  emHeading : string
  link: string
}

 const PageTitle = ({page, title , subHeading, emHeading, link  } :ComponentProps) => {
  return (
    <div className="heading-wrapper">
      <div className={ page === "home" ? "home-title" : "title-wrapper"}>
       <h1 className="page-title">{title}</h1> 
       { page === "home" ? 
        <span className="flex-row">
               <h2 className="page-subHeading">{subHeading}</h2>
                <Link to={link !== "" ? link : "/"}className="page-emHeading">
                  <span className="link-bg"></span>
                  <p>{emHeading}</p></Link>
  
            </span>
            : 
            <span className="flex-col">
            <h2 className="page-subHeading">{subHeading}</h2>
            {   
              link !== "" ?
             <h2 className="page-emHeading heading-spacing">{emHeading}<Link to={link !== "" ? link : "/"}>click here</Link></h2>
             :
             <h2 className="page-emHeading heading-spacing">{emHeading}</h2>
            }
           
         </span>
      }
      </div>
      <PageHeadImage page={page}/>
    </div>
  )
}

export default PageTitle;