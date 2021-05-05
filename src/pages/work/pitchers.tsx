import React, { useEffect } from "react"
// Components 
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProjectHeader from "../../components/projects/aComponents/ProjectHeader";
import Info from "../../components/projects/pitchers/Info";

const Pitchers: React.FC = () => {
  useEffect(() => {
    window.scroll(0,0)
  },[])
  return(
  <Layout>
    <SEO title="Pitchers" />
    <ProjectHeader 
      title="Pitchers"
      subtitle="Sports Bar and Grill"
      slug="pitchers"
      github="https://github.com/JayLewis1/pitchers-sports-bar-and-grill"
      site="https://pitchers-sports-bar-and-grill.netlify.app/"
    />
    <Info />
  </Layout>
)
  }

export default Pitchers; 
