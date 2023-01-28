import React, { useEffect } from "react"
// Components 
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import ProjectHeader from "../../components/projects/aComponents/ProjectHeader";
import Info from "../../components/projects/middletons/Info";

//images
import Home from '../../images/works/middletons/home-hero@2x.png'

const middletonsMobilty: React.FC = () => {
  useEffect(() => {
    window.scroll(0,0)
  },[])
  return (
  <Layout>
    <SEO title="Middletons Mobility" />
    <ProjectHeader 
      title="Middletons Mobility"
      subtitle="A mobility ecommerce and lead generation website"
      slug="middletons"
      github="https://github.com/jaylewiswcm/james-portfolio"
      site="https://middletons.co.uk/"
      imageSrc={Home}
      />
    <Info />
  </Layout>
  )
}

export default middletonsMobilty; 
