import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const serviceCard = ({ title, description, fluid, link }) => {
  return (
    <div className="col-xs-12 col-md-4 section-container-spacer">
      <Img className="img-responsive" alt="" fluid={fluid} />
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={`/${link.to}`} className="btn btn-primary" title="">
        {" "}
        {link.text}
      </Link>
    </div>
  )
}

export default serviceCard
