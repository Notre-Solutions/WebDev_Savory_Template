import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import MasonryComp from "../components/masonry"

const Landing = ({ data }) => {
  const imgMap = data.markdownRemark.frontmatter.landingPage
  return (
    <Layout current="landing">
      <main className="" id="main-collapse">
        <div className="hero-full-wrapper">
          <div className="grid">
            <div className="gutter-sizer"></div>
            <div className="grid-sizer"></div>
            <div className="masonry">
              <MasonryComp imgs={Object.values(imgMap)} />
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
        }
      }
    }
  }
`
