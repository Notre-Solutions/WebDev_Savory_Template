import React from "react"
import Layout from "../components/layout"
const navbar = () => {
  return (
    <header className="">
      <div className="navbar navbar-default visible-xs">
        <button type="button" className="navbar-toggle collapsed">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a href="./index" className="navbar-brand">
          Mashup Template
        </a>
      </div>

      <nav className="sidebar">
        <div className="navbar-collapse" id="navbar-collapse">
          <div className="site-header hidden-xs">
            <a className="site-brand" href="./index" title="">
              <img
                className="img-responsive site-logo"
                alt=""
                src="../img/mashup-logo.svg"
              />
              Mashup Template
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <ul className="nav">
            <li>
              <a href="./index" title="">
                Home
              </a>
            </li>
            <li>
              <a href="./about" title="">
                About
              </a>
            </li>
            <li>
              <a href="./services" title="">
                Services
              </a>
            </li>
            <li>
              <a href="./contact" title="">
                Contact
              </a>
            </li>
            <li>
              <a href="./components" title="">
                Components
              </a>
            </li>
          </ul>

          <nav className="nav-footer">
            <p className="nav-footer-social-buttons">
              <a className="fa-icon" href="https://www.instagram.com/" title="">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="fa-icon" href="https://dribbble.com/" title="">
                <i className="fab fa-dribbble"></i>
              </a>
              <a className="fa-icon" href="https://twitter.com/" title="">
                <i className="fab fa-twitter"></i>
              </a>
            </p>
            <p>
              © Untitled | Website created with{" "}
              <a
                href="http://www.mashup-template.com/"
                title="Create website with free html template"
              >
                Mashup Template
              </a>
              /
              <a href="https://www.unsplash.com/" title="Beautiful Free Images">
                Unsplash
              </a>
            </p>
          </nav>
        </div>
      </nav>
    </header>
  )
}

export default navbar
