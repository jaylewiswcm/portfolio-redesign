import * as React from "react"
// Components 
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProHeader from "../../components/projects/dirt/ProHeader";
import Info from "../../components/projects/dirt/Info";

const Dirt: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <ProHeader />
    <Info />
  </Layout>
)

export default Dirt; 
