import * as React from "react"
// Components 
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/title/PageTitle";
import Works from "../components/works/Works";
import AddToPortfolio from "../components/banners/AddToPortfolio";

const Work: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <PageTitle 
      page="work" 
      title="My Work" 
      subHeading="Selection of projects from freelancing and personal projects." emHeading="If you want to find out more about the technology I use click here" />
      <Works />
      <AddToPortfolio />
  </Layout>
)

export default Work
