import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { getTextClassByBgColor } from '../common/colorLight'

export class Issue extends Component {
  createLabel = (labelInfo, index) => {
    const { name, color } = labelInfo.node
    const hexColor = '#' + color
    const styles = { backgroundColor: hexColor }
    const classForTextColor = getTextClassByBgColor(hexColor)
    let classes = `issue__label px-4 py-1 ${classForTextColor}`
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

  getStatusColor = status => {
    let baseColor = 'issue__status'
    return status === 'open' ? `${baseColor}Open` : `${baseColor}Closed`
  }

  render() {
    const { title, author, id } = this.props
    const statusName = this.getStatus()
    const statusColor = this.getStatusColor(statusName)
    return (
      <div className="my-5">
        <Link className="issue__title text-white" to={`/detail/${id}`}>
          {title}
        </Link>
        <p className={`${statusColor} mb-1 text-uppercase`}>{statusName}</p>
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
  status: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
}

export default Issue
