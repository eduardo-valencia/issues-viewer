import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Option from './Option'
import Label from './Label'

export class Labels extends Component {
  createLabels = () => {
    const { labels, toggleLabel } = this.props
    return labels.map((label, index) => (
      <Label toggleLabel={toggleLabel} index={index} label={label} />
    ))
  }

  getLabelsIfTheyExist = () => {
    const { labels } = this.props
    if (!labels) {
      return 'No available labels to filter by.'
    }
    return this.createLabels()
  }

  render() {
    return <Option name="Labels">{this.createLabels()}</Option>
  }
}

Labels.propTypes = {
  labels: PropTypes.any,
  toggleLabel: PropTypes.func.isRequired
}

export default Labels
