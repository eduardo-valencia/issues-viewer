import React, { Component } from 'react'
import CreationDate from './CreationDate'
import Labels from './Labels'
import Assignees from './Assignees'

export class IssueInfo extends Component {
  render() {
    const { data } = this.props
    if (!data) return null
    return (
      <div className="dropdown dropleft">
        <button
          className="btn btn-dark"
          type="button"
          id="issueInfoBtn"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            src="https://img.icons8.com/android/24/000000/info.png"
            alt="Info icon"
          />
        </button>
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
