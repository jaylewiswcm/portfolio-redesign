import * as React from "react"
// Components 
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProHeader from "../../components/projects/pitchers/ProHeader";
import Info from "../../components/projects/pitchers/Info";

const Pitchers: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <ProHeader />
    <Info />
  </Layout>
)

export default Pitchers; 
