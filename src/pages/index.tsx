import * as React from "react"
// Components 
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/title/PageTitle";
import Works from "../components/works/Works";
import Contact from "../components/contact/Contact";

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <PageTitle 
      page="home" 
      title="Developer of modern websites and applications" 
      subHeading="Jay lewis" emHeading="See my work" />
    <Works />
    <Contact />
  </Layout>
)

export default IndexPage
