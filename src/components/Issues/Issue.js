import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Issue extends Component {
  createLabel = (labelInfo, index) => {
    const { name, color } = labelInfo.node
    const hexColor = '#' + color
    const styles = { backgroundColor: hexColor }
    let classes = 'issue__label px-4 py-1'
    if (index === 0) classes += ' mr-3'
    if (this.isDarkColor(hexColor)) classes += ' text-white'
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

  hexToRgb = hexString => {
    // Source: https://gist.github.com/jed/983661
    hexString = +(
      '0x' + hexString.slice(1).replace(hexString.length > 4 && /./g, '$&$&')
    )
    return [hexString >> 16, (hexString >> 8) & 255, hexString & 255]
  }

  rgbToHsp = rgb => {
    const red = rgb[0]
    const blue = rgb[1]
    const green = rgb[2]
    return Math.sqrt(0.299 * red ** 2 + 0.587 * blue ** 2 + 0.114 * green ** 2)
  }

  isDarkColor = hex => {
    const rgb = this.hexToRgb(hex)
    const hsp = this.rgbToHsp(rgb)
    return hsp < 127.5
  }

  getStatusColor = status => {
    let baseColor = 'issue__status'
    return status === 'open' ? `${baseColor}Open` : `${baseColor}Closed`
  }

  render() {
    const { title, author, url } = this.props
    const statusName = this.getStatus()
    const statusColor = this.getStatusColor(statusName)
    return (
      <div className="my-5">
        <a className="issue__title text-white" href={url}>
          {title}
        </a>
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
  url: PropTypes.string.isRequired
}

export default Issue
