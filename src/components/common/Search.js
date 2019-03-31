import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import SearchBar from './SearchBar'

export class Search extends Component {
  state = {
    currentQuery: '',
    submitted: false
  }

  handleSubmission = event => {
    event.preventDefault()
    this.setState(prevState => ({
      ...prevState,
      submitted: true
    }))
  }

  setQuery = newQuery => {
    this.setState(prevState => ({
      ...prevState,
      currentQuery: newQuery
    }))
  }

  getButtonClasses = () => {
    const { size } = this.props
    return size === 'large' ? 'px-5 py-2 mt-4' : ''
  }

  render() {
    const { size } = this.props
    const { submitted, currentQuery } = this.state
    const buttonClasses = this.getButtonClasses()
    if (submitted) return <Redirect to={`/search/${currentQuery}`} />
    return (
      <form
        className="form-inline"
        onSubmit={event => this.handleSubmission(event)}
      >
        <SearchBar setQuery={this.setQuery} size={size} />
        <button
          type="submit"
          className={`search__btn btn btn-c-secondary text-white ${buttonClasses}`}
        >
          Search
        </button>
      </form>
    )
  }
}

Search.propTypes = {
  size: PropTypes.string
}

export default Search
