import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Issue from './Issue'

export class IssuesList extends Component {
  createIssue = (issueInfo, index) => {
    const { author, closed, title, labels } = issueInfo.node
    return (
      <Issue
        title={title}
        labels={labels.edges}
        author={author.login}
        status={!closed}
        key={index}
      />
    )
  }

  createIssuesComponents = () => {
    const { issues } = this.props
    if (issues.length) {
      return issues.map(this.createIssue)
    }
    return 'No issues found for this project.'
  }

  render() {
    return <div className="mt-4">{this.createIssuesComponents()}</div>
  }
}

IssuesList.propTypes = {
  issues: PropTypes.array.isRequired
}

export default IssuesList
