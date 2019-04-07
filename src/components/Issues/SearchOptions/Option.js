import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Option extends Component {
  render() {
    const { children, name, classes } = this.props
    return (
      <div className={classes}>
        <p className="options__label">{name}</p>
        <hr />
        {children}
      </div>
    )
  }
}

Option.propTypes = {
  name: PropTypes.string.isRequired,
  classes: PropTypes.string
}

export default Option
