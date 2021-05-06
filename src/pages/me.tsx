import React, { useEffect } from "react"
// Components 
import Layout from  "../components/layout/layout"
import SEO from "../components/seo"
import PageTitle from "../components/title/PageTitle";
import Bio from "../components/me/Bio";
import BioBanner from "../components/banners/BioBanner";
import Skills from "../components/me/skills/SkillsQuery";
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
      subHeading="Not only a Graduate Web Developer." emHeading="In-between coding I’m either out with friends, listening to music or playing my guitar. I also love stepping outside for walks and enjoying nature."
      link=""
      anchor={{ text: "See my skills", slug: "/me/#skills"}} />
      <Bio />
      <Skills />
      <BioBanner />
      <CvModal />
  </Layout>
)
  }
export default Me 
