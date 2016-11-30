import React, { Component } from 'react'
import { Link }from 'react-router'

class NavLink extends Component {
  render() {
    return(
      <Link {...this.props} activeClassName="active-nav-link" className="nav-link"/>
    )
  }
}

export default NavLink
