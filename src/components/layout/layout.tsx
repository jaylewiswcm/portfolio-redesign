/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

import { useStaticQuery, graphql } from "gatsby"
import "../../styles/style.css";
import Header from "./header"
import Footer from "./footer";

interface ComponentProps {
  children: any,
}

const Layout = ({ children }: ComponentProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <div className="app-wrapper">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
