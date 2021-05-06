import React, { useEffect } from "react"
// Components 
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import ProjectHeader from "../../components/projects/aComponents/ProjectHeader";
import Info from "../../components/projects/bouncingborders/Info"

const BouncingBorders: React.FC = () => {
  useEffect(() => {
    window.scroll(0,0)
  },[])
  return(
  <Layout>
    <SEO title="BouncingBorders" />
    <ProjectHeader 
      title="Bouncing Borders"
      subtitle="Couples travel blog"
      slug="bouncingborders"
      github="https://github.com/JayLewis1/bouncingborderswp"
      site="http://bouncingborders.com/"
    />
    <Info />
  </Layout>
  )
  }

export default BouncingBorders; 
