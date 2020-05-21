import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/anbylogo.png"

const Header = ({ siteTitle }) => (
    <ul class="nav text-large text-center ">
    <li class="nav-item">
      <Link to="/">Home</Link>
    </li>
    <li class="nav-item">
      <Link to="/projects/">Projects</Link>
    </li>
    <li class="nav-item">
      <Link to="/blog/">Blog</Link>
    </li>
    <li class="nav-item">
      <Link to="/contact/">Contact</Link>
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
