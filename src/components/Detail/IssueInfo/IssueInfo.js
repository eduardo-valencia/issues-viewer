import React, { Component } from 'react'
import CreationDate from './CreationDate'
import Labels from './Labels'
import Assignees from './Assignees'
import IssueInfoBtn from './IssueInfoBtn'

export class IssueInfo extends Component {
  render() {
    const { data } = this.props
    if (!data) return null
    return (
      <div className="dropdown dropleft">
        <IssueInfoBtn />
        <div
          className="dropdown-menu text-body px-3 py-3 issueInfo__dropdown"
          aria-labelledby="issueInfoBtn"
        >
          <CreationDate data={data} />
          <Labels data={data} />
          <Assignees data={data} />
        </div>
      </div>
    )
  }
}

export default IssueInfo
