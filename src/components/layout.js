import React from "react"
import "@fortawesome/fontawesome-free/css/all.css"
import "../css/main.css"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import Navbar from "./navbar"
const Layout = ({ children, current }) => {
  return (
    <>
      <Helmet></Helmet>
      <Navbar />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
