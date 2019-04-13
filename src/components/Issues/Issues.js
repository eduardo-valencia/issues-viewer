import React, { Component } from 'react'
import Layout from '../Layout/Layout'
import getData from '../common/requests'
import '../../scss/Issues/utilities/manifest.scss'
// import getExampleQuery from './exampleQuery'
import QueryController from './QueryController'

export class Issues extends Component {
  state = {
    hasLoaded: false,
    issues: [],
    labels: [],
    pageInfo: null
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

  getQuery = (getLabels = true, params = '') => {
    const { repository, owner } = this.props.match.params
    return `
    query {
      repository(name:"${repository}", owner:"${owner}") {
        issues(first:10${params}) {
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
              id
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
    getLabels = true,
    useData = this.addDataToState
  ) => {
    const query = this.getQuery(getLabels, params)
    getData(query, useData, getLabels)
  }

  // addStaticData = () => {
  //   this.addDataToState(getExampleQuery())
  // }

  componentDidMount() {
    this.getIssues()
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
    this.getIssues(params, false, this.appendIssuesFromData)
  }

  render() {
    const { hasLoaded, issues, pageInfo, labels } = this.state
    return (
      <Layout title="Issues" subtitle={this.getPageSubtitle()}>
        <h2>Issues List</h2>
        {hasLoaded ? (
          <QueryController
            getIssues={this.getIssues}
            labels={labels}
            issues={issues}
            pageInfo={pageInfo}
            getAndAppendIssues={this.getAndAppendIssues}
          />
        ) : (
          <p className="text-white mt-3">Loading...</p>
        )}
      </Layout>
    )
  }
}

export default Issues
