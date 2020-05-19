import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/anbylogo.png"

const Header = ({ siteTitle }) => (
  <ul class="tab col-2 text-large">
  <li class="tab-item">
    <Link to="/">Home</Link>
  </li>
  <li class="tab-item">
    <Link to="/projects/">Projects</Link>
  </li>
  <li class="tab-item">
    <Link to="/blog/">Blog</Link>
  </li>
  </ul>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
