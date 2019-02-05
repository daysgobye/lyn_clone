import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import Header from "./header"
import "../base.sass"
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        contentfulSiteMisc{
          siteTitle
          faceBookLink
          contactEmail
          twitterLink
          instagramLink
          
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.contentfulSiteMisc.siteTitle} />
        <div>
          <main>{children}</main>
          <Footer data={data.contentfulSiteMisc}></Footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
