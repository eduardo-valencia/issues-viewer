import React, { Component } from 'react'
import OptionsContainer from '../OptionsContainer'
import Labels from './Labels'
import Status from './Status'
import SubmitOptionsBtn from '../SubmitOptionBtn'
import PropTypes from 'prop-types'

export class Filters extends Component {
  removeLabel = labelName => {
    const { setFilters, filters } = this.props
    setFilters({
      ...filters,
      selectedLabels: filters.selectedLabels.filter(
        currentLabel => labelName !== currentLabel
      )
    })
  }

  addLabel = labelName => {
    const { setFilters, filters } = this.props
    setFilters({
      ...filters,
      selectedLabels: [...filters.selectedLabels, labelName]
    })
  }

  toggleLabel = labelName => {
    const { selectedLabels } = this.props.filters
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
    const { setFilters, filters } = this.props
    setFilters({
      ...filters,
      status: isOpen
    })
  }

  render() {
    const { labels, updateIssues, filters } = this.props
    const { status } = filters
    return (
      <OptionsContainer name="Filters" id="filters-options">
        <Status setOpenOrClosed={this.setOpenOrClosed} filterByOpen={status} />
        <Labels labels={labels} toggleLabel={this.toggleLabel} />
        <SubmitOptionsBtn name="Filter" updateIssues={updateIssues} />
      </OptionsContainer>
    )
  }
}

Filters.propTypes = {
  labels: PropTypes.any,
  updateIssues: PropTypes.func.isRequired,
  setFilters: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired
}

export default Filters
