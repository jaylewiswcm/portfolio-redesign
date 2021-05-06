import React from 'react'
// Components 
import AnchorLinkBtn from "../buttons/AnchorLinkBtn";

interface ComponentProps {
  anchor: {
    slug: string
    text: string
  }
}

const TitleBtn = ({anchor} :ComponentProps ) => {
  if(anchor.slug === "") {
    return null;
  }

  return (
    <div className="work-title-btn">
      <AnchorLinkBtn url={anchor.slug} color="orange" text={anchor.text}/>
    </div>
  )
}

export default TitleBtn;