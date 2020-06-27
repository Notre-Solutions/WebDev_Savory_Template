import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const about = ({ data }) => {
  const { img10 } = data.markdownRemark.frontmatter.aboutPage
  console.log(data)
  return (
    <Layout current="about">
      <main className="" id="main-collapse">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <Img
              className="img-responsive"
              alt=""
              fluid={img10.childImageSharp.fluid}
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <h1>About me</h1>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>

            <h3>Incididunt ut labore </h3>

            <p>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Phasellus iaculis magna sagittis
              elit sagittis, at hendrerit lorem venenatis. Morbi accumsan
              iaculis blandit. Cras ultrices hendrerit nisl.
            </p>

            <h3>Ut enim ad minim veniam </h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              luctus at sem quis varius. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Phasellus
              iaculis magna sagittis elit sagittis, at hendrerit lorem
              venenatis. Morbi accumsan iaculis blandit. Cras ultrices hendrerit
              nisl.
            </p>
            <h3>Phasellus iaculis magna </h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>

            <a href="contact.html" className="btn btn-primary" title="">
              {" "}
              Get in touch
            </a>
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
          img10 {
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
