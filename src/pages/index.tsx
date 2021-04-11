import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/title/PageTitle";
import Grid from "../components/works/Grid";
import Works from "../components/works/Works";

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <PageTitle 
      page="home" 
      title="Developer of modern websites and applications" 
      subHeading="Jay lewis" emHeading="See my work" />
    {/* <Grid /> */}
    <Works />
  </Layout>
)

export default IndexPage
