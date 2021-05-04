import React, { useEffect } from "react"
// Components 
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/title/PageTitle";
import Bio from "../components/me/Bio";
import BioBanner from "../components/banners/BioBanner";
import CvModal from "../components/modals/cv/CvModal";
const Me: React.FC = () => {
  useEffect(() => {
    window.scroll(0,0)
  },[])
  return (
  <Layout>
    <SEO title="Me" />
    <PageTitle 
      page="me" 
      title="Me" 
      subHeading="Not only a Graduate Web Developer." emHeading="In-between coding if  I’m not out with friends then I’m listen to music and playing my guitar. I also love stepping outside for walks to rejuvenate my creativity."
      link="" />
      <Bio />
      <BioBanner />
      <CvModal />
  </Layout>
)
  }
export default Me 
