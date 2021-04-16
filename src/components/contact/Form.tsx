import React from 'react'

 const Form = () => {
  return (
    <form action="" id="form">
      <span className="input-wrapper">
        <label htmlFor="name">What's your name?</label>
        <input type="text" name="name" id="name" placeholder="Enter your name"></input>
      </span>
      <span className="input-wrapper">
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" placeholder="Enter your email"></input>
      </span>
      <span className="input-wrapper">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" placeholder="How can I help?"></textarea>
      </span>
      <input type="submit" value="Send message"/>
    </form>
  )
}

export default Form;