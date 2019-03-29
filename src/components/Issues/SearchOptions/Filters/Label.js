import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Label extends Component {
  render() {
    const { label, toggleLabel, index } = this.props
    const { name } = label.node
    const id = `label-${index}`
    return (
      <label htmlFor={id} className="position-relative d-block" key={index}>
        <input
          type="checkbox"
          aria-label="Label checkbox."
          onChange={() => toggleLabel(name)}
          className="label__input"
          id={id}
        />
        <span className="label__checkmark" />
        <p className="label__name mb-0">{name}</p>
      </label>
    )
  }
}

Label.propTypes = {
  toggleLabel: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  label: PropTypes.object.isRequired
}

export default Label
