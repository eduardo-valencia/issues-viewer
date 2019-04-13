import React, { Component } from 'react'

export class Assignees extends Component {
  makeAssignee = (assigneeInfo, index) => {
    const { login } = assigneeInfo
    return <p key={index}>{login}</p>
  }

  tryMakingAssignees = () => {
    const { edges: assignees } = this.props.data.assignees
    if (!assignees.length)
      return <p className="text-body">No assignees available for this issue.</p>
    return assignees.map(this.makeAssignee)
  }

  render() {
    return (
      <div className="mt-3">
        <h3>Assignees</h3>
        {this.tryMakingAssignees()}
      </div>
    )
  }
}

export default Assignees
