import React from 'react'
// Components
import AnchorLinkBtn from "../buttons/AnchorLinkBtn";

 const FormSuccess = () => {
  return (
    <div className="form-success">
      <p className="success-p">Thanks for getting in touch, I will try get back to you as soon as possible. In the meantime why not browse my projects.</p>
    <AnchorLinkBtn color="blue" url="/work/#my-works" text="Explore my projects"/>
    </div>
  )
}

export default FormSuccess;
