import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MoreDataBtn extends Component {
  render() {
    const { getAndAppendData } = this.props
    const { hasNextPage } = this.props.pageInfo

    return (
      <button
        className="btn btn-c-secondary text-white"
        disabled={!hasNextPage}
        onClick={getAndAppendData}
      >
        View More
      </button>
    )
  }
}

MoreDataBtn.propTypes = {
  getAndAppendData: PropTypes.func.isRequired,
  pageInfo: PropTypes.object.isRequired
}
