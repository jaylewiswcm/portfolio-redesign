import React, {useEffect} from "react"
// Components 
import Layout from  "../components/layout/layout"
import SEO from "../components/seo"
import PageTitle from "../components/title/PageTitle";
import Works from "../components/works/Works";
import AddToPortfolio from "../components/banners/AddToPortfolio";

const Work: React.FC = () => {
  useEffect(() => {
    window.scroll(0,0)
  },[])
  return (
  <Layout>
    <SEO title="Work" />
    <PageTitle 
      page="work" 
      title="My Work" 
      subHeading="Selection of projects from freelancing and personal projects." emHeading="If you want to find out more about the technology I use "
      link="/me/#skills"
      anchor={{slug: "/work/#my-works", text: "See the projects"}} />
      <Works page="works"/>
      <AddToPortfolio />
  </Layout>
)
  }

export default Work
