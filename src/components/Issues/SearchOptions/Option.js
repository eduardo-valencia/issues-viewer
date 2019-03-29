import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Option extends Component {
  render() {
    const { children, name } = this.props
    return (
      <div className="mb-5">
        <p className="options__label">{name}</p>
        <hr />
        {children}
      </div>
    )
  }
}

Option.propTypes = {
  name: PropTypes.string.isRequired
}

export default Option
