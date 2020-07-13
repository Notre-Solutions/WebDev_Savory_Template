import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import ServiceCard from '../components/serviceCard'
const services = ({ data }) => {
  const { title, description, servicesCards } = data.markdownRemark.frontmatter.servicesPage
  return (
    <Layout current="services">
      <main className="" id="main-collapse">
        <div className="row">
          <div className="col-xs-12 section-container-spacer">
            <h1>{title}</h1>
            <p>
              {description}
            </p>
          </div>

          {servicesCards.map(card => {
            return(
              <ServiceCard 
              title={card.title}
              description={card.body}
              fluid={card.image.childImageSharp.fluid}
              link={card.link}
              />
            )
          })}
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
          servicesCards{
            title
            body
            link{
              to
              text
            }
            image{
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
