import React, { useEffect } from "react"
// Components 
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProHeader from "../../components/projects/bouncingborders/ProHeader";
import Info from "../../components/projects/bouncingborders/Info"

const BouncingBorders: React.FC = () => {
  useEffect(() => {
    window.scroll(0,0)
  },[])
  return(
  <Layout>
    <SEO title="BouncingBorders" />
    <ProHeader />
    <Info />
  </Layout>
  )
  }

export default BouncingBorders; 
