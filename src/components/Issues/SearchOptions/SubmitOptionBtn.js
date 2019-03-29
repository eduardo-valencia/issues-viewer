import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class SubmitOptionBtn extends Component {
  render() {
    const { name, updateIssues } = this.props
    return (
      <button
        className="btn options__submit px-5 w-100 text-white"
        onClick={updateIssues}
      >
        {name}
      </button>
    )
  }
}

SubmitOptionBtn.propTypes = {
  updateIssues: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default SubmitOptionBtn
