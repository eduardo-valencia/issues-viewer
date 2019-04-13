import React, { Component } from 'react'
import { makeCustomParam, makeCustomParams } from '../common/query'
import PropTypes from 'prop-types'
import SearchOptions from './SearchOptions/SearchOptions'
import IssuesList from './IssuesList'

export class QueryController extends Component {
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

  // Methods that build parameters
  makeLabelsFilters = () => {
    const { selectedLabels } = this.state.filters
    return makeCustomParam('labels', JSON.stringify(selectedLabels))
  }

  makeStatusFilter = () => {
    const { status } = this.state.filters
    const statesValue = status ? 'OPEN' : 'CLOSED'
    return makeCustomParam('states', `[${statesValue}]`)
  }

  makeOrderParam = () => {
    const { order } = this.state.sortingOptions
    const orderValue = `{ direction:${order}, field:UPDATED_AT }`
    return makeCustomParam('orderBy', orderValue)
  }

  getOptionsInOptionType = options => Object.entries(options)

  getOptionsList = () => {
    const options = ['filters', 'sortingOptions']
    let changedOptions = []
    options.forEach(option => {
      const options = this.state[option]
      const optionsInType = this.getOptionsInOptionType(options)
      changedOptions.push(...optionsInType)
    })
    return changedOptions
  }

  makeOptionsParams = changedOptions => {
    const optionsToQueryBuilders = {
      selectedLabels: this.makeLabelsFilters,
      status: this.makeStatusFilter,
      order: this.makeOrderParam
    }
    return changedOptions.map(optionInfo => {
      const name = optionInfo[0]
      const value = optionInfo[1]
      return optionsToQueryBuilders[name](value)
    })
  }

  getSearchOptionsParams = () => {
    const changedOptions = this.getOptionsList()
    return this.makeOptionsParams(changedOptions)
  }

  buildNextIssuesParam = nextIssuesPosition => {
    return makeCustomParam('after', `"${nextIssuesPosition}"`)
  }

  buildParamsList = getNextIssues => {
    const searchOptionsParams = this.getSearchOptionsParams()
    if (getNextIssues) {
      const { endCursor } = this.props.pageInfo
      const nextIssuesParam = this.buildNextIssuesParam(endCursor)
      return [...searchOptionsParams, nextIssuesParam]
    }
    return searchOptionsParams
  }

  getIssuesWithParams = () => {
    const { getIssues } = this.props
    const paramsAsPartOfQuery = makeCustomParams(this.buildParamsList())
    getIssues(paramsAsPartOfQuery)
  }

  getAndAppendIssuesWithParams = () => {
    const { getAndAppendIssues } = this.props
    const paramsAsString = makeCustomParams(this.buildParamsList(true))
    getAndAppendIssues(paramsAsString)
  }

  render() {
    const { filters, sortingOptions } = this.state
    const { labels, issues, pageInfo } = this.props
    return (
      <>
        <SearchOptions
          labels={labels}
          filters={filters}
          getIssues={this.getIssuesWithParams}
          setSortingOptions={this.setSortingOptions}
          setFilters={this.setFilters}
          sortingOptions={sortingOptions}
        />
        <IssuesList
          issues={issues}
          pageInfo={pageInfo}
          getAndAppendIssues={this.getAndAppendIssuesWithParams}
        />
      </>
    )
  }
}

QueryController.propTypes = {
  getIssues: PropTypes.func.isRequired,
  labels: PropTypes.array,
  issues: PropTypes.array,
  pageInfo: PropTypes.object,
  getAndAppendIssues: PropTypes.func.isRequired
}

export default QueryController
