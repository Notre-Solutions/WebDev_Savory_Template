import React from "react"
import Img from "gatsby-image"
import {Link} from 'gatsby'
const imgCard = ({ img, title, description, pageName }) => {
  return (
    <div className="grid-item">
      <Img
        className="img-responsive"
        alt=""
        fluid={img.childImageSharp.fluid}
      />
      <Link to={`./${pageName}`} className="project-description">
        <div className="project-text-holder">
          <div className="project-text-inner">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default imgCard
