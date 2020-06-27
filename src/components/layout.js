import React from "react"
import "@fortawesome/fontawesome-free/css/all.css"
import "../css/main.css"
import PropTypes from "prop-types"
import Nav from "./nav"
import Footer from "./footer"
import { Helmet } from "react-helmet"

const Layout = ({ children, current, style }) => {
  return (
    <>
      <Helmet>
      </Helmet>
      <Nav current={current} style={style}></Nav>
      {children}
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
