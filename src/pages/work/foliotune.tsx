import React, {useEffect} from "react"
// Components 
import Layout from "../../components/layout"
import Info from "../../components/projects/foliotune/Info"
import ProHeader from "../../components/projects/foliotune/ProHeader"
import SEO from "../../components/seo"

const Foliotune: React.FC = () => {
  useEffect(() => {
    window.scroll(0,0)
  },[])
  return(
  <Layout>
    <SEO title="FolioTune" />
    <ProHeader />
    <Info />
  </Layout>
)
}

export default Foliotune; 
