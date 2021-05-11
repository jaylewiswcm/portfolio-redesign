import React, {useEffect} from "react"
// Components 
import Layout from "../../components/layout/layout"
import Info from "../../components/projects/foliotune/Info"
import ProjectHeader from "../../components/projects/aComponents/ProjectHeader";
import SEO from "../../components/seo"

const Foliotune: React.FC = () => {
  useEffect(() => {
    window.scroll(0,0)
  },[])
  return(
  <Layout>
    <SEO title="FolioTune" />
    <ProjectHeader 
      title="FolioTune"
      subtitle="Collaborate, share and create song ideas"
      slug="foliotune"
      github="https://github.com/JayLewis1/social-song-creator"
      site="https://foliotune.netlify.app/"
    />
    <Info />
  </Layout>
)
}

export default Foliotune; 
