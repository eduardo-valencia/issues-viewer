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
      showSearchBar
    } = this.props
    return (
      <>
        <NavBar showSearchBar={showSearchBar} />
        <div className="container py-5 px-4">
          <h1 id="page-title">{title}</h1>
          {subtitle ? <h2 id="page-subtitle">{subtitle}</h2> : null}
          <div className="my-5">{children}</div>
        </div>
        {outsideContainer ? outsideContainer : null}
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
