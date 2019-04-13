import React, { Component } from 'react'
import { getAbbreviatedTimeFromToday } from './relativeTime'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

export class Comment extends Component {
  getDate = () => {
    const creationDate = new Date(this.props.creationDate)
    const abbreviatedTimeFromToday = getAbbreviatedTimeFromToday(creationDate)
    return <p className="comment__date">{abbreviatedTimeFromToday + ' Ago'}</p>
  }

  render() {
    const { author, content } = this.props
    return (
      <div className="border-rounded px-3 py-2 my-4 comment__container shadow">
        <div className="d-flex justify-content-between">
          <p className="comment__name text-uppercase">{author}</p>
          {this.getDate()}
        </div>
        <ReactMarkdown source={content} />
      </div>
    )
  }
}

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  creationDate: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Comment
