import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Landing = ({ data }) => {
  const {
    img1,
    img3,
    img7,
    img10,
    img11,
    img13,
  } = data.markdownRemark.frontmatter.landingPage
  return (
    <Layout current="landing">
      <main className="" id="main-collapse">
        {/* <!-- Add your site or app content here --> */}

        <div className="hero-full-wrapper">
          <div className="grid">
            <div className="gutter-sizer"></div>
            <div className="grid-sizer"></div>

            <div className="grid-item">
              <img
                className="img-responsive"
                alt=""
                src={`../img/img-12.jpg`}
              />
              <a href="./project" className="project-description">
                <div className="project-text-holder">
                  <div className="project-text-inner">
                    <h3>Vivamus vestibulum</h3>
                    <p>Discover more</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="grid-item">
              <Img
                class="img-responsive"
                alt=""
                fluid={img1.childImageSharp.fluid}
              />
              {/* <img className="img-responsive" alt="" src="../img/img-05.jpg" /> */}
              <a href="./project" className="project-description">
                <div className="project-text-holder">
                  <div className="project-text-inner">
                    <h3>Vivamus vestibulum</h3>
                    <p>Discover more</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="grid-item">
              <Img
                class="img-responsive"
                alt=""
                fluid={img13.childImageSharp.fluid}
              />
              <a href="./project" className="project-description">
                <div className="project-text-holder">
                  <div className="project-text-inner">
                    <h3>Vivamus vestibulum</h3>
                    <p>Discover more</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="grid-item">
              <img className="img-responsive" alt="" src="../img/img-04.jpg" />
              <a href="./project" className="project-description">
                <div className="project-text-holder">
                  <div className="project-text-inner">
                    <h3>Vivamus vestibulum</h3>
                    <p>Discover more</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="grid-item">
              <Img
                class="img-responsive"
                alt=""
                fluid={img7.childImageSharp.fluid}
              />
              <a href="./project" className="project-description">
                <div className="project-text-holder">
                  <div className="project-text-inner">
                    <h3>Vivamus vestibulum</h3>
                    <p>Discover more</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="grid-item">
              <Img
                class="img-responsive"
                alt=""
                fluid={img11.childImageSharp.fluid}
              />
              <a href="./project" className="project-description">
                <div className="project-text-holder">
                  <div className="project-text-inner">
                    <h3>Vivamus vestibulum</h3>
                    <p>Discover more</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="grid-item">
              <Img
                class="img-responsive"
                alt=""
                fluid={img10.childImageSharp.fluid}
              />
              <a href="./project" className="project-description">
                <div className="project-text-holder">
                  <div className="project-text-inner">
                    <h3>Vivamus vestibulum</h3>
                    <p>Discover more</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="grid-item">
              <Img
                class="img-responsive"
                alt=""
                fluid={img3.childImageSharp.fluid}
              />
              <a href="./project" className="project-description">
                <div className="project-text-holder">
                  <div className="project-text-inner">
                    <h3>Vivamus vestibulum</h3>
                    <p>Discover more</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Landing

export const pageQuery = graphql`
  query LandingPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        landingPage {
          img1 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img3 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img7 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img10 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img11 {
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
        }
      }
    }
  }
`
