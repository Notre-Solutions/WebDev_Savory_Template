import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby"

const contact = ({data}) => {
  const {title, description, contactForm} = data.markdownRemark.frontmatter.contactPage

  return (
    <Layout current="contact">
      <main className="" id="main-collapse">
        <div className="row">
          <div className="col-xs-12">
            <div className="section-container-spacer">
              <h1>{title}</h1>
              <p>
                {description}
              </p>
            </div>
            <div className="section-container-spacer">
              <form action="" className="reveal-content">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg">
                      Send
                    </button>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-unstyled address-container">
                      <li>
                        <span className="fa-icon">
                          <i className="fa fa-phone" aria-hidden="true"></i>
                        </span>
                        {contactForm.telephone}
                      </li>
                      <li>
                        <span className="fa-icon">
                          <i className="fa fa-at" aria-hidden="true"></i>
                        </span>
                        {contactForm.email}
                      </li>
                      <li>
                        <span className="fa-icon">
                          <i
                            className="fa fa fa-map-marker"
                            aria-hidden="true"
                          ></i>
                        </span>
                        {contactForm.address}
                      </li>
                    </ul>
                    <h3>Follow me on social networks</h3>
                    <a
                      href={contactForm.links.linkedin}
                      title=""
                      className="fa-icon"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href={contactForm.links.twitter} title="" className="fa-icon">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a
                      href={contactForm.links.dribbble}
                      title=""
                      className="fa-icon"
                    >
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default contact

export const pageQuery = graphql`
  query ContactPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        contactPage {
          contactForm {
            telephone
            email
            address
            subtitle
            links{
              facebook
              twitter
              dribbble
            }
          }
          title
        }
      }
    }
  }
`