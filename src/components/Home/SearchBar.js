import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class SearchBar extends Component {
  handleInputChange = event => {
    event.persist()
    const { setQuery } = this.props
    setQuery(event.target.value)
  }

  render() {
    return (
      <div id="search-bar" className="w-100 shadow-lg">
        <img
          src="https://img.icons8.com/ios/50/000000/search.png"
          alt="search icon"
          id="search-btn"
          className="d-inline-block mr-3 align-middle"
        />
        <input
          type="text"
          name="searchQuery"
          className="d-inline-block"
          id="query"
          placeholder="Search..."
          onChange={this.handleInputChange}
        />
      </div>
    )
  }
}

SearchBar.propTypes = {
  setQuery: PropTypes.func.isRequired
}

export default SearchBar
