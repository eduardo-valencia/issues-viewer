import React from 'react'
import PropTypes from 'prop-types'
import { makeCustomParam, makeCustomParams } from './query'

function buildNextIssuesParams(nextIssuesPosition) {
  return makeCustomParam('after', `"${nextIssuesPosition}"`)
}

function getMoreIssues(nextIssuesPosition, getAndAppendIssues) {
  const params = makeCustomParams([buildNextIssuesParams(nextIssuesPosition)])
  getAndAppendIssues(params)
}

export default function NextIssuesBtn(props) {
  const { getAndAppendIssues } = props
  const { hasNextPage, endCursor } = props.pageInfo
  const getIssuesWithInfo = () => getMoreIssues(endCursor, getAndAppendIssues)
  return (
    <button
      className="btn btn-c-secondary text-white"
      disabled={!hasNextPage}
      onClick={getIssuesWithInfo}
    >
      View More
    </button>
  )
}

NextIssuesBtn.propTypes = {
  getAndAppendIssues: PropTypes.func.isRequired,
  pageInfo: PropTypes.object.isRequired
}
