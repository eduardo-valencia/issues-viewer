import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Issue extends Component {
  createLabel = (labelInfo, index) => {
    const { name, color } = labelInfo.node
    const styles = {
      backgroundColor: '#' + color
    }
    let classes = 'issue__label px-4 py-1'
    if (index === 0) classes += ' mr-3'
    return (
      <div className={classes} style={styles} key={index}>
        {name}
      </div>
    )
  }

  createLabels = () => {
    const { labels } = this.props
    if (!labels.length) return null
    return <div className="d-flex">{labels.map(this.createLabel)}</div>
  }

  getStatus = () => {
    const { status } = this.props
    return status ? 'open' : 'closed'
  }

  render() {
    const { title, author } = this.props
    const statusName = this.getStatus()
    return (
      <div className="my-5">
        <h3 className="issue__title text-white">{title}</h3>
        <p className={`issue__status--${statusName} mb-1 text-uppercase`}>
          {statusName}
        </p>
        {this.createLabels()}
        <p className="issue__author">by {author}</p>
      </div>
    )
  }
}

Issue.propTypes = {
  title: PropTypes.string.isRequired,
  labels: PropTypes.array.isRequired,
  author: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired
}

export default Issue
