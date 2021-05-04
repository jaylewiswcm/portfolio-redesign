import React, { useEffect } from "react"
// Components 
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/title/PageTitle";
import Works from "../components/works/Works";
import Contact from "../components/contact/Contact";

const IndexPage: React.FC = () => {
  useEffect(() => {
    window.scroll(0,0)
  },[])
  return (
  <Layout>
    <SEO title="Home" />
    <PageTitle 
      page="home" 
      title="Developer of modern websites and applications" 
      subHeading="Jay Lewis" emHeading="See my work"
      link="/work" />
    <Works page="home"/>
    <Contact />
  </Layout>
)
  }
export default IndexPage
