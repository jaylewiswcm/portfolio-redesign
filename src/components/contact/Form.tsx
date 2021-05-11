import React, { useState, useEffect }  from 'react'
import { useForm } from '@formspree/react';
// Component
import ValidationError from "./ValidationError";
import FormSuccess from "./FormSuccess";

 const Form = () => {
   const [state, handleSubmit] = useForm("xbjqdokw")
   const [formData, setFormData] = useState({
     name: "",
     email : "",
    message: ""
   })
   const [errors, setInputErrors] = useState({
    name: "",
    email : "",
   message: "",
   success : false
  })

  useEffect(() => {
 
  },[])

   if(state.succeeded) {
     return <FormSuccess />
   }
  
   const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> ) => {
    setFormData({...formData, [e.target.name] : e.target.value})
    console.log(formData);
   }

   const onSubmit = (e:React.FormEvent<HTMLFormElement> ) => {
     e.preventDefault()
     if(errors.success === true) {
      handleSubmit({submissionData : formData});
     }
  }

   const checkForInputErrors = () => {
     const newErrors = { 
       name :"",
       email : "",
       message: "",
       success : true
     }
     if(formData.name === "") {
      newErrors.name = "Please enter your name";
      newErrors.success = false;
     } 
     if(formData.email === "") {
      newErrors.email = "Please enter a valid email address";
      newErrors.success = false;
     }
     if(formData.message === "" ) {
      newErrors.message = "Message has to be more than 5 characters";
      newErrors.success = false;
     }
     if(newErrors.name === "" || newErrors.email === "" || newErrors.message === "" || newErrors.message.length >= 5 ) {
      setInputErrors(newErrors);
     }
   }

  
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <span className="input-wrapper">
        <label htmlFor="name">What's your name?</label>
        <input 
          type="text" 
          name="name" 
          id="name" 
          placeholder="Enter your name"
          className={errors.name !== "" ? "input-error" : ""}
          onChange={(e) => onChange(e)}></input>
      <ValidationError error={errors.name}/>
      </span>
      <span className="input-wrapper">
        <label htmlFor="email">Email Address</label>
        <input 
          type="email"
          name="email" 
          id="email" 
          placeholder="Enter your email"
          className={errors.email !== "" ? "input-error" : ""}
          onChange={(e) => onChange(e)}></input>
           <ValidationError error={errors.email}/>
      </span>
      <span className="input-wrapper">
        <label htmlFor="message">Message</label>
        <textarea 
          name="message" 
          id="message" 
          placeholder="How can I help?"
          className={errors.message !== "" ? "input-error" : ""}
          onChange={(e) => onChange(e)}></textarea>
        <ValidationError error={errors.message}/>
      </span>
      <input type="submit" value="Send message" onClick={() => checkForInputErrors()}/>
    </form>
  )
}

export default Form;