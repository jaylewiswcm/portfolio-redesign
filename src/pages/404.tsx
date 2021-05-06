import * as React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import AnchorLinkBtn from "../components/buttons/AnchorLinkBtn";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="not-found">
      <h2>404 Page not found</h2>  
      <p className="not-found-p">Looks like you went down the wrong route. Go back home by clicking below.</p>
      <AnchorLinkBtn color="blue" url="/" text="Go back home"/>
    </div> 
  </Layout>
)

export default NotFoundPage
