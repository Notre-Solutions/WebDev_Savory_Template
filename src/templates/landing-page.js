import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import MasonryComp from "../components/masonry"

const Landing = ({ data }) => {
  const cards = data.markdownRemark.frontmatter.landingPage.cards
  
  return (
    <Layout current="landing">
      <main className="" id="main-collapse">
        <div className="hero-full-wrapper">
          <div className="grid">
            <div className="gutter-sizer"></div>
            <div className="grid-sizer"></div>
            <div className="masonry">
              <MasonryComp imgs={Object.values(cards)} />
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
          cards{
            title
            description
            to
            img{
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
  }
`
