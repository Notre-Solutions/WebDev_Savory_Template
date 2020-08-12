import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

export default function project({ data }) {
  const {
    title,
    description,
    footer,
    images,
  } = data.markdownRemark.frontmatter.projectPage

  return (
    <div>
      <Layout current="project">
        <main className="" id="main-collapse">
          <div className="row">
            <div className="col-xs-12 col-md-8">
              <div className="section-container-spacer">
                <h1>{title}</h1>
                <p>{description}</p>
              </div>

              <div className="section-container-spacer">
                <p>
                  {" "}
                  <Img
                    className="img-responsive"
                    alt=""
                    fluid={images[0].img.childImageSharp.fluid}
                  />
                </p>
                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <p>
                      {" "}
                      <Img
                        className="img-responsive"
                        alt=""
                        fluid={images[1].img.childImageSharp.fluid}
                      />
                    </p>
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <p>
                      {" "}
                      <Img
                        className="img-responsive"
                        alt=""
                        fluid={images[2].img.childImageSharp.fluid}
                      />
                    </p>
                  </div>
                </div>
              </div>

              <p> {footer}</p>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query projectQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        projectPage {
          title
          description
          footer
          images {
            img {
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
  }
`
