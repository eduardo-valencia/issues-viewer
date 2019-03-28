import React, { Component } from 'react'
import OptionsContainer from './OptionsContainer'
import Labels from './Labels'
import Status from './Status'
import PropTypes from 'prop-types'

export class Filters extends Component {
  state = {
    selectedLabels: [],
    filterByStatus: {
      enabled: true,
      filteringByOpenWhenEnabled: true
    }
  }

  removeLabel = labelName => {
    this.setState(prevState => ({
      ...prevState,
      selectedLabels: prevState.selectedLabels.filter(
        currentLabel => labelName !== currentLabel
      )
    }))
  }

  addLabel = labelName => {
    this.setState(prevState => ({
      ...prevState,
      selectedLabels: [...prevState.selectedLabels, labelName]
    }))
  }

  toggleLabel = labelName => {
    const { selectedLabels } = this.state
    const labelIsSelected = selectedLabels.find(
      currentLabel => currentLabel === labelName
    )
    if (labelIsSelected) {
      this.removeLabel(labelName)
    } else {
      this.addLabel(labelName)
    }
  }

  setOpenOrClosed = isOpen => {
    this.setState(prevState => ({
      ...prevState,
      filterByStatus: {
        enabled: true,
        filteringByOpenWhenEnabled: isOpen
      }
    }))
  }

  filter = () => {
    const { getIssues } = this.props
    const { selectedLabels, filterByStatus } = this.state
    const { enabled, filteringByOpenWhenEnabled } = filterByStatus
    let statusFilter = null
    if (enabled) {
      statusFilter = filteringByOpenWhenEnabled ? 'OPEN' : 'CLOSED'
    }
    getIssues(selectedLabels, statusFilter)
  }

  render() {
    const { labels } = this.props
    return (
      <OptionsContainer name="Filters" id="filters-options">
        <Status setOpenOrClosed={this.setOpenOrClosed} />
        <Labels labels={labels} toggleLabel={this.toggleLabel} />
        <button className="btn px-5 w-100" onClick={this.filter}>
          Filter
        </button>
      </OptionsContainer>
    )
  }
}

Filters.propTypes = {
  labels: PropTypes.any,
  getIssues: PropTypes.func.isRequired
}

export default Filters
