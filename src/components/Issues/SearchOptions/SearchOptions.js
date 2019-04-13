import React, { Component } from 'react'
import Filters from './Filters/Filters'
import Sort from './Sort/Sort'
import PropTypes from 'prop-types'

export class SearchOptions extends Component {
  render() {
    const {
      filters,
      sortingOptions,
      setSortingOptions,
      setFilters,
      labels,
      getIssues
    } = this.props
    return (
      <div className="d-flex flex-column flex-md-row justify-content-md-start">
        <Filters
          labels={labels}
          updateIssues={getIssues}
          setFilters={setFilters}
          filters={filters}
        />
        <Sort
          sortOptions={sortingOptions}
          setOption={setSortingOptions}
          updateIssues={getIssues}
        />
      </div>
    )
  }
}

SearchOptions.propTypes = {
  labels: PropTypes.any,
  getIssues: PropTypes.func.isRequired,
  setSortingOptions: PropTypes.func.isRequired,
  setFilters: PropTypes.func.isRequired,
  filters: PropTypes.object
}

export default SearchOptions
