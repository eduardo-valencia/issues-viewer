import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import SearchBar from './SearchBar'

export class Search extends Component {
  state = {
    currentQuery: '',
    submitted: false
  }

  handleSubmission = event => {
    event.preventDefault()
    // this.search()
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

  render() {
    const { submitted, currentQuery } = this.state
    if (submitted) return <Redirect to={`search/${currentQuery}`} />
    return (
      <>
        <p className="mb-2">Search for your project:</p>
        <form
          className="form-inline mx-auto d-block"
          onSubmit={event => this.handleSubmission(event)}
        >
          <SearchBar setQuery={this.setQuery} />
          <button type="submit" className="mt-4 px-5 py-2 btn search__btn">
            Search
          </button>
        </form>
      </>
    )
  }
}

export default Search
