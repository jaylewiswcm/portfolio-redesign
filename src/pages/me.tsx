import * as React from "react"
// Components 
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/title/PageTitle";

const Me: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <PageTitle 
      page="me" 
      title="Me" 
      subHeading="Not only a Graduate Web Developer." emHeading="In-between coding if  I’m not out with friends then I’m listen to music and playing my guitar. I also love stepping outside for walks to rejuvenate my creativity." />
  </Layout>
)

export default Me
