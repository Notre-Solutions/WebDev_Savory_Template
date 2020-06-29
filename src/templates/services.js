import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
const services = ({ data }) => {
  const { img12, img13, img14 } = data.markdownRemark.frontmatter.servicesPage
  return (
    <Layout current="services">
      <main className="" id="main-collapse">
        <div className="row">
          <div className="col-xs-12 section-container-spacer">
            <h1>Services</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="col-xs-12 col-md-4 section-container-spacer">
            <Img
              className="img-responsive"
              alt=""
              fluid={img12.childImageSharp.fluid}
            />
            <h2>Consectetur</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Link to="/contact" className="btn btn-primary" title="">
              {" "}
              Get in touch
            </Link>
          </div>

          <div className="col-xs-12 col-md-4 section-container-spacer">
            <Img
              className="img-responsive"
              alt=""
              fluid={img13.childImageSharp.fluid}
            />
            <h2>Adipiscing</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Link to="/contact" className="btn btn-primary" title="">
              {" "}
              Get in touch
            </Link>
          </div>

          <div className="col-xs-12 col-md-4 section-container-spacer">
            <Img
              className="img-responsive"
              alt=""
              fluid={img14.childImageSharp.fluid}
            />
            <h2>Dolor</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Link to="/contact" className="btn btn-primary" title="">
              {" "}
              Get in touch
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default services

export const pageQuery = graphql`
  query servicesQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        servicesPage {
          img12 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img13 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img14 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
