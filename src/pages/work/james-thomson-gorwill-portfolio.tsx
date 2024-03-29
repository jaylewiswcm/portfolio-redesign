import React, { useEffect } from "react"
// Components 
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import ProjectHeader from "../../components/projects/aComponents/ProjectHeader";
import Info from "../../components/projects/jtgportfolio/Info";

//images
import Home from '../../images/works/jtg-portfolio/home@2x.png'

const JTGPortfolio: React.FC = () => {
  useEffect(() => {
    window.scroll(0,0)
  },[])
  return (
  <Layout>
    <SEO title="James Thomson-Gorwill Portfolio" />
    <ProjectHeader 
      title="James Thomson-Gorwill Portfolio"
      subtitle="A print designer's portfolio"
      slug="jtg-portfolio"
      github="https://github.com/jaylewiswcm/james-portfolio"
      site="https://jamesthomsongorwill.vercel.app/"
      imageSrc={Home}
    />
    <Info />
  </Layout>
  )
}

export default JTGPortfolio; 
