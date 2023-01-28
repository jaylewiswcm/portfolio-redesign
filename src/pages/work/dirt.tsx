import React, { useEffect } from "react"
// Components 
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import ProjectHeader from "../../components/projects/aComponents/ProjectHeader";
import Info from "../../components/projects/dirt/Info";

//images
import Home from '../../images/works/dirt/home@2x.jpg'

const Dirt: React.FC = () => {
  useEffect(() => {
    window.scroll(0,0)
  },[])
  return (
  <Layout>
    <SEO title="Dirt" />
    <ProjectHeader 
      title="Dirt"
      subtitle="An Alice in Chains Tribute Band"
      slug="dirt"
      github="https://github.com/JayLewis1/dirt"
      site="http://www.dirtaliceinchains.com/"
      imageSrc={Home}
    />
    <Info />
  </Layout>
  )
}

export default Dirt; 
