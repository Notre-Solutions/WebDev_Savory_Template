import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

const about = ({ data }) => {
  const {
    title,
    description,
    sections,
    image,
  } = data.markdownRemark.frontmatter.aboutPage

  return (
    <Layout current="about">
      <main className="" id="main-collapse">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <Img
              className="img-responsive"
              alt=""
              fluid={image.childImageSharp.fluid}
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <h1>{title}</h1>

            <p>{description}</p>

            {sections.map(section => {
              return (
                <div key={section.title}>
                  <h3>{section.title}</h3>
                  <p>{section.body}</p>
                </div>
              )
            })}

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

export default about

export const pageQuery = graphql`
  query aboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        aboutPage {
          title
          description
          contactSlogan
          sections {
            title
            body
          }
          image {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`
