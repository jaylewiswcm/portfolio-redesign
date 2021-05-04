import React, {useEffect} from "react"
// Components 
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactTitle from "../components/title/ContactTitle";
import Form from "../components/contact/Form";

const Contact: React.FC = () => {
  useEffect(() => {
    window.scroll(0,0)
  },[])
  return(
  <Layout>
    <SEO title="Contact" />
    <ContactTitle 
      title="Get in Contact" 
      emHeading="Got an idea you want to run past me or considering me to work in you company. Get in touch."
      number="07592832146"
      email="Jr_lewis@outlook.com"/>
      <div className="contact-form-container"  id="form">
        <span className="form-title">
          <h3>Get in touch</h3>
          <p>Send me a message, I’m happy to help.</p>
        </span>
        <Form />
      </div>
  </Layout>
)
  }

export default Contact 
