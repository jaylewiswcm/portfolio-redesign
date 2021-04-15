import React from 'react'
import { Link } from "gatsby";
import PageHeadImage from "../style/PageHeadImage";
interface ComponentProps {
  page: string
  title : string
  subHeading : string
  emHeading : string
}

 const PageTitle = ({page, title , subHeading, emHeading  } :ComponentProps) => {
  return (
    <div className="center-wrapper">
      <div className="title-wrapper">
       <h1 className="page-title">{title}</h1> 
       { page === "home" ? 
        <span className="flex-row">
               <h2 className="page-subHeading">{subHeading}</h2>
               {page === "home" ?
                <Link to="/"className="page-emHeading">{emHeading}</Link>
               :  <h2 className="page-emHeading">{emHeading}</h2>}
              
            </span>
            : 
            <span className="flex-col">
            <h2 className="page-subHeading">{subHeading}</h2>
            {page === "home" ?
             <Link to="/"className="page-emHeading">{emHeading}</Link>
            :  <h2 className="page-emHeading heading-spacing">{emHeading}</h2>}
           
         </span>
      }

      </div>
      <PageHeadImage />
    </div>
  )
}

export default PageTitle;