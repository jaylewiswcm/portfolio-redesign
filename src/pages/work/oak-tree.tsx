import React, { useEffect } from "react"
// Components 
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import ProjectHeader from "../../components/projects/aComponents/ProjectHeader";
import Info from "../../components/projects/oak-tree/Info";

//images
import Home from '../../images/works/oak-tree/home@2x.jpg'

const OakTree: React.FC = () => {
  useEffect(() => {
    window.scroll(0,0)
  },[])
  return (
  <Layout>
    <SEO title="Oak Tree Mobility" />
    <ProjectHeader 
      title="Oak Tree Mobility"
      subtitle="A mobility lead generation website"
      slug="oak-tree"
      github="https://github.com/jaylewiswcm/james-portfolio"
      site="https://oaktreemobility.co.uk/"
      imageSrc={Home}
      />
    <Info />
  </Layout>
  )
}

export default OakTree; 
