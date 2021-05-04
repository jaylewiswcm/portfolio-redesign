import React from 'react'
// Components 
import AnchorLinkBtn from "../buttons/AnchorLinkBtn";

interface ComponentProps {
  page: string
}

const TitleBtn = ({page} :ComponentProps ) => {

  if(page !== "work") {
    return null;
  }

  return (
    <div className="work-title-btn">
      <AnchorLinkBtn url="/work/#my-works" color="orange" text="See the projects"/>
    </div>
  )
}

export default TitleBtn;