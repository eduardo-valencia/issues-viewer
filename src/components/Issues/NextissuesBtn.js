import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NextIssuesBtn extends Component {
  render() {
    const { getAndAppendIssues } = this.props
    const { hasNextPage } = this.props.pageInfo

    return (
      <button
        className="btn btn-c-secondary text-white"
        disabled={!hasNextPage}
        onClick={getAndAppendIssues}
      >
        View More
      </button>
    )
  }
}

NextIssuesBtn.propTypes = {
  getAndAppendIssues: PropTypes.func.isRequired,
  pageInfo: PropTypes.object.isRequired
}
