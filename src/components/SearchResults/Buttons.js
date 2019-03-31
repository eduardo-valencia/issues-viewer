import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export class Buttons extends Component {
  getDisabledSelectBtn = () => {
    return (
      <button
        disabled="disabled"
        className="btn buttons__select--disabled text-dark"
      >
        Select
      </button>
    )
  }

  getDefaultSelectBtn = () => {
    const { selectedRepo } = this.props
    return (
      <Link
        to={`/issues/${selectedRepo}`}
        className="btn btn-c-primary text-dark"
      >
        Select
      </Link>
    )
  }

  getSelectButton = () => {
    const { selectedRepo } = this.props
    if (selectedRepo) {
      return this.getDefaultSelectBtn()
    }
    return this.getDisabledSelectBtn()
  }

  render() {
    return (
      <div className="buttons__container py-3 mt-3">
        <div className="container d-flex justify-content-between">
          <Link to="/" className="btn btn-c-secondary text-white">
            Back
          </Link>
          {this.getSelectButton()}
        </div>
      </div>
    )
  }
}

Buttons.propTypes = {
  selectedRepo: PropTypes.any
}

export default Buttons
