import React, { Component } from 'react'
import Layout from '../Layout/Layout'
import '../../scss/SearchResults/utilities/manifest.scss'
import Result from './Result'
import Buttons from './Buttons'
import getData from '../common/requests'

export class SearchResults extends Component {
  state = {
    results: null,
    selected: null
  }

  getQuery = () => {
    const { match } = this.props
    const query = match.params.query
    return `
      query {
        search(first:10, query:"${query}", type:REPOSITORY) {
          edges {
            node {
              ...on Repository {
                nameWithOwner
              }
            }
          }
        }
      }
      `
  }

  addResultsToState = data => {
    this.setState(prevState => ({
      ...prevState,
      results: data
    }))
  }

  search = () => {
    getData(this.getQuery(), this.addResultsToState)
  }

  createResults = () => {
    const { selected, results } = this.state
    const { edges } = results.data.search
    const namesListItems = edges.map((edge, index) => (
      <Result
        repoName={edge.node.nameWithOwner}
        key={index}
        selectRepo={this.setSelectedItem}
        selectedRepo={selected}
      />
    ))
    return <ul className="mt-5 results__list pl-0">{namesListItems}</ul>
  }

  createResultsIfDataAvailable = () => {
    const { results } = this.state
    if (results) {
      return this.createResults()
    } else {
      return 'Loading...'
    }
  }

  componentDidMount() {
    this.search()
  }

  setSelectedItem = repoName => {
    this.setState(prevState => ({
      ...prevState,
      selected: repoName
    }))
  }

  getDefaultTitle = () => {
    const { query } = this.props.match.params
    return `Loading results for ${query}...`
  }

  getTitleWithResultsNumber = () => {
    const { match } = this.props
    const { edges } = this.state.results.data.search
    const { query } = match.params
    return `Found ${edges.length} results for "${query}"`
  }

  getTitle = () => {
    const { results } = this.state
    if (results) {
      return this.getTitleWithResultsNumber()
    }
    return this.getDefaultTitle()
  }

  render() {
    const { selected } = this.state
    const title = this.getTitle()
    return (
      <Layout
        title={title}
        outsideContainer={<Buttons selectedRepo={selected} />}
      >
        <h2 className="page__subheading">Please select your project.</h2>
        {this.createResultsIfDataAvailable()}
      </Layout>
    )
  }
}

export default SearchResults
