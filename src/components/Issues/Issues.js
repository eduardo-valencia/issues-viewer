import React, { Component } from 'react'
import Layout from '../Layout/Layout'
import getData from '../common/requests'
import IssuesList from './IssuesList'
import '../../scss/Issues/utilities/manifest.scss'
import SearchOptions from './SearchOptions/SearchOptions'
import getExampleQuery from './exampleQuery'
import makeCustomParams from './query'

export class Issues extends Component {
  state = {
    hasLoaded: false,
    issues: [],
    labels: [],
    pageInfo: null,
    queryInfo: {
      paramsBuilders: [],
      dataHandler: null
    }
  }

  combineParams = () => {
    const { paramsBuilders } = this.state.queryInfo
    let combinedParams = []
    paramsBuilders.forEach(builder => {
      const params = builder()
      combinedParams = [...combinedParams, ...params]
    })
    return makeCustomParams(combinedParams)
  }

  sendQuery = () => {
    const { useData } = this.state
    const combinedParams = this.combineParams()
    this.getIssues(combinedParams, useData, false)
  }

  addParamsBuilder = paramsBuilder => {
    this.setState(prevState => ({
      ...prevState,
      queryInfo: {
        ...prevState.queryInfo,
        paramsBuilders: [...prevState.paramsBuilders, paramsBuilder]
      }
    }))
  }

  setDataHandler = dataHandler => {
    this.setState(prevState => ({
      ...prevState,
      queryInfo: {
        ...prevState.queryInfo,
        dataHandler: dataHandler
      }
    }))
  }

  getRepoAndOwner = () => {
    const { repository, owner } = this.props.match.params
    return `${repository}/${owner}`
  }

  getPageSubtitle = () => {
    const { repository, owner } = this.props.match.params
    if (repository && owner) {
      const repoAndOwner = this.getRepoAndOwner()
      return `Project: ${repoAndOwner}`
    }
    return null
  }

  addDataToState = data => {
    const { issues, labels } = data.data.repository
    this.setState(prevState => ({
      ...prevState,
      issues: issues.edges,
      labels: labels.edges,
      pageInfo: issues.pageInfo,
      hasLoaded: true
    }))
  }

  makeCustomParam = (name, value) => `${name}:${value}`

  makeCustomParams = params => `, ${params.join(', ')}`

  getQuery = (customParams, getLabels = true) => {
    const { repository, owner } = this.props.match.params
    return `
    query {
      repository(name:"${repository}", owner:"${owner}") {
        issues(first:10${customParams}) {
          pageInfo {
            endCursor
            hasNextPage
          }
          edges {
            node {
              author {
                login
              }
              closed
              title
              url
              labels(first:2) {
                edges {
                  node {
                    color
                    name
                  }
                }
              }
            }
          }
        }
        ${
          getLabels
            ? `labels(first:10) {
          edges {
            node {
              name
              color
            }
          }
        }`
            : ''
        }
      }
    }
    `
  }

  getIssues = (
    params = '',
    useData = this.addDataToState,
    getLabels = true
  ) => {
    const query = this.getQuery(params)
    getData(query, useData, getLabels)
  }

  addStaticData = () => {
    this.addDataToState(getExampleQuery())
  }

  componentDidMount() {
    this.addStaticData()
  }

  appendIssuesFromData = data => {
    const { edges: issuesList, pageInfo } = data.data.repository.issues
    this.setState(prevState => ({
      ...prevState,
      issues: [...prevState.issues, ...issuesList],
      pageInfo: pageInfo
    }))
  }

  getAndAppendIssues = (params = '') => {
    this.getIssues(params, this.appendIssuesFromData, false)
  }

  render() {
    const { hasLoaded, issues, labels, pageInfo } = this.state
    return (
      <Layout title="Issues" subtitle={this.getPageSubtitle()}>
        <h2>Issues List</h2>
        {hasLoaded ? (
          <>
            <SearchOptions
              labels={labels}
              getIssues={this.getIssues}
              makeCustomParam={this.makeCustomParam}
              makeCustomParams={this.makeCustomParams}
            />
            <IssuesList
              issues={issues}
              pageInfo={pageInfo}
              getAndAppendIssues={this.getAndAppendIssues}
            />
          </>
        ) : (
          <p className="text-white mt-3">Loading...</p>
        )}
      </Layout>
    )
  }
}

export default Issues
