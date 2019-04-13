import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import MoreDataBtn from '../common/MoreDataBtn'

export class Comments extends Component {
  createComment = (commentData, index) => {
    const { author, body, updatedAt } = commentData.node
    const { login: authorName } = author
    return (
      <Comment
        author={authorName}
        creationDate={updatedAt}
        content={body}
        key={index}
      />
    )
  }

  getComments = () => {
    const { comments } = this.props.data
    const { edges: commentsData } = comments
    return commentsData.map(this.createComment)
  }

  getMoreCommentsBtn = () => {
    const { data, getAndAppendComments } = this.props
    const { pageInfo } = data.comments
    return (
      <MoreDataBtn
        pageInfo={pageInfo}
        getAndAppendData={getAndAppendComments}
      />
    )
  }

  render() {
    const { data } = this.props
    return (
      <div>
        <h1>Comments</h1>
        {data ? (
          <>
            {this.getComments()}
            {this.getMoreCommentsBtn()}
          </>
        ) : (
          <p>Loading comments...</p>
        )}
      </div>
    )
  }
}

Comments.propTypes = {
  data: PropTypes.object,
  getAndAppendComments: PropTypes.func.isRequired
}

export default Comments
