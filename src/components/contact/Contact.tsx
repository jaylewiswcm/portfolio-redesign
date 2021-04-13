import React from 'react'
// Components
import Information from "./Information";
import Details from "./Details";
import Form from "./Form";

const Contact:React.FC = () => {
  return (
    <div className="center-wrapper" id="contact-wrapper">
      <div className="left-wrapper">
        <Information />
        <Details />
      </div>
      <h3 className="mobile-form-title">Use my form</h3>
      <Form />
    </div>
  )
}

export default Contact;