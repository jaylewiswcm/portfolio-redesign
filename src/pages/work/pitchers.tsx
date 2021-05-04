import React, { useEffect } from "react"
// Components 
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProHeader from "../../components/projects/pitchers/ProHeader";
import Info from "../../components/projects/pitchers/Info";

const Pitchers: React.FC = () => {
  useEffect(() => {
    window.scroll(0,0)
  },[])
  return(
  <Layout>
    <SEO title="Pitchers" />
    <ProHeader />
    <Info />
  </Layout>
)
  }

export default Pitchers; 
