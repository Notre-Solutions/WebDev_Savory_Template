import React from "react"
import { Link } from "gatsby"
import classnames from "classnames"

class navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      active: false,
    }
    this.toggleClass = this.toggleClass.bind(this)
  }
  toggleClass() {
    const currentState = this.state.active
    this.setState({ active: !currentState })
  }
  render() {
    return (
      <header className="">
        <div className="navbar navbar-default visible-xs">
          <button
            type="button"
            className="navbar-toggle collapsed"
            onClick={this.toggleClass}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/" className="navbar-brand">
            Notre Studio Template
          </Link>
        </div>

        <nav
          className={classnames("sidebar", {
            open: this.state.active,
          })}
        >
          <div className="navbar-collapse" id="navbar-collapse">
            <div className="site-header hidden-xs">
              <Link className="site-brand" to="/" title="">
                Notre Studio Template
              </Link>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <ul className="nav">
              <li>
                <Link onClick={this.toggleClass} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={this.toggleClass} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link onClick={this.toggleClass} to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link onClick={this.toggleClass} to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link onClick={this.toggleClass} to="/components">
                  Components
                </Link>
              </li>
            </ul>

            <nav className="nav-footer">
              <p className="nav-footer-social-buttons">
                <a
                  className="fa-icon"
                  href="https://www.instagram.com/"
                  title=""
                >
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
                  href="http://www.notre-studio.co.uk"
                  title="Get your business online"
                >
                  Notre Template
                </a>
                /
                <a
                  href="https://www.unsplash.com/"
                  title="Beautiful Free Images"
                >
                  Unsplash
                </a>
              </p>
            </nav>
          </div>
        </nav>
      </header>
    )
  }
}

export default navbar
