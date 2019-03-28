import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Layout extends Component {
  render() {
    const { title, children, subtitle, outsideContainer } = this.props
    return (
      <>
        <div className="container py-5 px-4">
          <h1 id="page-title">{title}</h1>
          {subtitle ? <h2 id="page-subtitle">{subtitle}</h2> : null}
          <div className="my-5">{children}</div>
        </div>
        {outsideContainer ? outsideContainer : null}
      </>
    )
  }
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

export default Layout
