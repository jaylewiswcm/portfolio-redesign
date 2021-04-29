import * as React from "react"
// Components 
import Layout from "../../components/layout"
import Info from "../../components/projects/foliotune/Info"
import ProHeader from "../../components/projects/foliotune/ProHeader"
import SEO from "../../components/seo"

const Foliotune: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <ProHeader />
    <Info />
  </Layout>
)

export default Foliotune; 
