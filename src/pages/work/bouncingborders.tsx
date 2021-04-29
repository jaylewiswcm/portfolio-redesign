import * as React from "react"
// Components 
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProHeader from "../../components/projects/bouncingborders/ProHeader";
import Info from "../../components/projects/bouncingborders/Info"

const BouncingBorders: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <ProHeader />
    <Info />
  </Layout>
)

export default BouncingBorders; 
