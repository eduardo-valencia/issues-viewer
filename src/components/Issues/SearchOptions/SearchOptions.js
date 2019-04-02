import React, { Component } from 'react'
import Filters from './Filters/Filters'
import Sort from './Sort/Sort'
import PropTypes from 'prop-types'

export class SearchOptions extends Component {
  getDefaultOptions = () => ({
    filters: {
      selectedLabels: [],
      status: true
    },
    sortingOptions: {
      order: 'DESC'
    }
  })

  state = this.getDefaultOptions()

  setOption = (option, value) => {
    this.setState(prevState => ({
      ...prevState,
      [option]: value
    }))
  }

  setFilters = filters => this.setOption('filters', filters)

  setSortingOptions = sortingOptions =>
    this.setOption('sortingOptions', sortingOptions)

  makeLabelsFilters = () => {
    const { makeCustomParam } = this.props
    const { selectedLabels } = this.state.filters
    return makeCustomParam('labels', `["${selectedLabels.join('", "')}]`)
  }

  makeStatusFilter = () => {
    const { status } = this.state.filters
    const { makeCustomParam } = this.props
    const statesValue = status ? 'OPEN' : 'CLOSED'
    return makeCustomParam('states', `[${statesValue}]`)
  }

  makeOrderParam = () => {
    const { order } = this.state.sortingOptions
    const { makeCustomParam } = this.props
    const orderValue = `{ direction:${order}, field:UPDATED_AT }`
    return makeCustomParam('orderBy', orderValue)
  }

  getModifiedOptionsInType = (options, type) => {
    return Object.entries(options).filter(option => {
      const name = option[0]
      const value = option[1]
      const defaultOptions = this.getDefaultOptions()
      const defaultValue = defaultOptions[type][name]
      return !(value !== defaultValue)
    })
  }

  getChangedOptions = () => {
    const options = ['filters', 'sortingOptions']
    let changedOptions = []
    options.forEach(option => {
      const options = this.state[option]
      const modifiedOptions = this.getModifiedOptionsInType(options, option)
      changedOptions.push(...modifiedOptions)
    })
    return changedOptions
  }

  makeOptionsParams = (optionsToQueryBuilders, changedOptions) => {
    return changedOptions.map(optionInfo => {
      const name = optionInfo[0]
      const value = optionInfo[1]
      return optionsToQueryBuilders[name](value)
    })
  }

  joinParams = changedOptions => {
    const { makeCustomParams } = this.props
    const optionsToQueryBuilders = {
      selectedLabels: this.makeLabelsFilters,
      status: this.makeStatusFilter,
      order: this.makeOrderParam
    }
    const optionParams = this.makeOptionsParams(
      optionsToQueryBuilders,
      changedOptions
    )
    return makeCustomParams(optionParams)
  }

  optionsHaveChanged = () => {
    const defaultOptions = this.getDefaultOptions()
    if (defaultOptions !== this.state) {
      return true
    }
    return false
  }

  updateIssues = () => {
    if (this.optionsHaveChanged()) {
      const changedOptions = this.getChangedOptions()
      const joinedParams = this.joinParams(changedOptions)
      const { getIssues } = this.props
      getIssues(joinedParams)
    }
  }

  render() {
    const { labels } = this.props
    const { filters, sortingOptions } = this.state
    return (
      <div className="d-flex justify-content-between justify-content-md-start">
        <Filters
          labels={labels}
          updateIssues={this.updateIssues}
          setFilters={this.setFilters}
          filters={filters}
        />
        <Sort
          sortOptions={sortingOptions}
          setOption={this.setSortingOptions}
          updateIssues={this.updateIssues}
        />
      </div>
    )
  }
}

SearchOptions.propTypes = {
  labels: PropTypes.any,
  getIssues: PropTypes.func.isRequired,
  makeCustomParam: PropTypes.func.isRequired,
  makeCustomParams: PropTypes.func.isRequired,
  addParamsBuilder: PropTypes.func.isRequired
}

export default SearchOptions
