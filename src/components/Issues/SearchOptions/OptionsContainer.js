import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class OptionsContainer extends Component {
  render() {
    const { children, name, id } = this.props
    return (
      <div className="dropdown">
        <button
          className="btn dropdown-toggle option"
          type="button"
          id={id}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {name}
        </button>
        <div className="dropdown-menu px-3" aria-labelledby={id}>
          {children}
        </div>
      </div>
    )
  }
}

OptionsContainer.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default OptionsContainer
