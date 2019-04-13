import React from 'react'
import PropTypes from 'prop-types'

export default function MainContent(props) {
  const { title, subtitle, children } = props
  return (
    <div className="container py-5 px-4">
      <h1 id="page-title">{title}</h1>
      {subtitle ? <h2 id="page-subtitle">{subtitle}</h2> : null}
      <div className="my-5">{children}</div>
    </div>
  )
}

MainContent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}
