import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NextissuesBtn from './NextissuesBtn'
import Issue from './Issue'

export class IssuesList extends Component {
  createIssue = (issueInfo, index) => {
    const { author, closed, title, labels, url } = issueInfo.node
    return (
      <Issue
        title={title}
        labels={labels.edges}
        author={author.login}
        status={!closed}
        key={index}
        url={url}
      />
    )
  }

  createIssuesComponents = () => {
    const { issues } = this.props
    if (issues.length) {
      return issues.map(this.createIssue)
    }
    return <p className="text-white">No issues found for this project.</p>
  }

  render() {
    const { pageInfo, getAndAppendIssues } = this.props
    return (
      <div className="mt-4">
        {this.createIssuesComponents()}
        <NextissuesBtn
          pageInfo={pageInfo}
          getAndAppendIssues={getAndAppendIssues}
        />
      </div>
    )
  }
}

IssuesList.propTypes = {
  issues: PropTypes.array.isRequired,
  pageInfo: PropTypes.object.isRequired,
  getAndAppendIssues: PropTypes.func.isRequired
}

export default IssuesList
