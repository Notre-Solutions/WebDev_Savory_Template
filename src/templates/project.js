import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

export default function project({ data }) {
  const { img12, img13, img14 } = data.markdownRemark.frontmatter.projectPage

  return (
    <div>
      <Layout>
        <main class="" id="main-collapse">
          <div class="row">
            <div class="col-xs-12 col-md-8">
              <div class="section-container-spacer">
                <h1>Project</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div class="section-container-spacer">
                <p>
                  {" "}
                  <Img
                    className="img-responsive"
                    alt=""
                    fluid={img12.childImageSharp.fluid}
                  />
                </p>
                <div class="row">
                  <div class="col-xs-12 col-md-6">
                    <p>
                      {" "}
                      <Img
                        className="img-responsive"
                        alt=""
                        fluid={img13.childImageSharp.fluid}
                      />
                    </p>
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <p>
                      {" "}
                      <Img
                        className="img-responsive"
                        alt=""
                        fluid={img14.childImageSharp.fluid}
                      />
                    </p>
                  </div>
                </div>
              </div>

              <p>
                {" "}
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
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
