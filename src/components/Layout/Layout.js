import React, { Component } from 'react'
import NavBar from './NavBar'
import PropTypes from 'prop-types'
import Footer from './Footer'
import MainContent from './MainContent'

export class Layout extends Component {
  getNavBar = () => {
    const { showSearchBar, navBarContents } = this.props
    return (
      <NavBar showSearchBar={showSearchBar}>
        {navBarContents ? navBarContents : null}
      </NavBar>
    )
  }

  render() {
    const { title, children, subtitle, outsideContainer } = this.props
    return (
      <>
        <div id="main-content">
          {this.getNavBar()}
          <MainContent title={title} subtitle={subtitle} children={children} />
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
