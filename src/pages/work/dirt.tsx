import React, { useEffect } from "react"
// Components 
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProHeader from "../../components/projects/dirt/ProHeader";
import Info from "../../components/projects/dirt/Info";

const Dirt: React.FC = () => {
  useEffect(() => {
    window.scroll(0,0)
  },[])
  return (
  <Layout>
    <SEO title="Dirt" />
    <ProHeader />
    <Info />
  </Layout>
  )
}

export default Dirt; 
