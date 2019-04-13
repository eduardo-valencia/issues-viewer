import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getAbbreviatedTimeFromToday } from './relativeTime'

export class Metadata extends Component {
  getStatusName = () => {
    const { data } = this.props
    return data.closed ? 'Closed' : 'Open'
  }

  getBackgroundColor = isClosed => {
    return isClosed ? 'bg-danger' : 'bg-success'
  }

  getStatus = () => {
    const { isClosed } = this.props.data
    const bgColor = this.getBackgroundColor(isClosed)
    const statusName = this.getStatusName()
    return (
      <p
        className={`${bgColor} px-4 py-2 text-white d-inline-block border-rounded mr-3`}
      >
        {statusName}
      </p>
    )
  }

  getDate = () => {
    const { createdAt } = this.props.data
    const createdAtTime = new Date(createdAt)
    const abbreviatedTimeFromToday = getAbbreviatedTimeFromToday(createdAtTime)
    return <p className="text-white d-inline">{abbreviatedTimeFromToday}</p>
  }

  render() {
    const { data } = this.props
    if (data) {
      return (
        <>
          {this.getStatus()}
          {this.getDate()}
        </>
      )
    }
    return null
  }
}

Metadata.propTypes = {
  data: PropTypes.object
}

export default Metadata
