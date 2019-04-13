import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

export class Description extends Component {
  getDescriptionContent = () => {
    const { data } = this.props
    if (data) {
      return <ReactMarkdown source={data.body} className="text-white" />
    }
    return <p>Loading description...</p>
  }

  render() {
    return (
      <div className="my-5 bg-c-primary-tint px-3 py-5 border-rounded">
        <h1>Description</h1>
        {this.getDescriptionContent()}
      </div>
    )
  }
}

Description.propTypes = {
  data: PropTypes.object
}

export default Description
