import React, { Component } from 'react'
import NavBar from './NavBar'
import PropTypes from 'prop-types'
import Footer from './Footer'

export class Layout extends Component {
  render() {
    const {
      title,
      children,
      subtitle,
      outsideContainer,
      showSearchBar,
      navBarContents
    } = this.props
    return (
      <>
        <div id="main-content">
          <NavBar showSearchBar={showSearchBar}>
            {navBarContents ? navBarContents : null}
          </NavBar>
          <div className="container py-5 px-4">
            <h1 id="page-title">{title}</h1>
            {subtitle ? <h2 id="page-subtitle">{subtitle}</h2> : null}
            <div className="my-5">{children}</div>
          </div>
          {outsideContainer ? outsideContainer : null}
          <div className="pushForFooter" />
        </div>
        <Footer />
      </>
    )
  }
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  showSearchBar: PropTypes.bool
}

export default Layout
