import React, { Component } from 'react'
import Layout from '../Layout/Layout'
import getData from '../common/requests'
import IssuesList from './IssuesList'
import '../../scss/Issues/utilities/manifest.scss'
import SearchOptions from './SearchOptions/SearchOptions'

export class Issues extends Component {
  state = {
    hasLoaded: false,
    issues: []
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
      hasLoaded: true
    }))
  }

  makeFiltersIntoQuery = (labelsFilters = null, statusFilter = null) => {
    let queryArguments = []
    const filtersToMethods = [
      {
        filters: labelsFilters,
        method: this.makeLabelsFiltersAsQuery
      },
      {
        filters: statusFilter,
        method: this.makeStatusFilter
      }
    ]
    filtersToMethods.forEach(filterAndMethod => {
      const { filters, method } = filterAndMethod
      if (filters) {
        queryArguments.push(method(filters))
      }
    })
    return `, ${queryArguments.join(', ')}`
  }

  makeCustomParam = (name, value) => `${name}:${value}`

  makeCustomParams = params => `, ${params.join(', ')}`

  getQuery = customParams => {
    const { repository, owner } = this.props.match.params
    return `
    query {
      repository(name:"${repository}", owner:"${owner}") {
        issues(first:10${customParams}) {
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
        labels(first:10) {
          edges {
            node {
              name
              color
            }
          }
        }
      }
    }
    `
  }

  getIssuesAndRepoLabels = (params = '') => {
    const query = this.getQuery(params)
    getData(query, this.addDataToState)
  }

  addStaticData = () => {
    this.addDataToState({
      data: {
        repository: {
          issues: {
            edges: [
              {
                node: {
                  author: {
                    login: 'StringKe'
                  },
                  closed: false,
                  title:
                    "app.getPath('pepperFlashSystemPlugin') exception !!!!",
                  url: 'https://github.com/electron/electron/issues/17603',
                  labels: {
                    edges: []
                  }
                }
              },
              {
                node: {
                  author: {
                    login: 'amarpatel'
                  },
                  closed: false,
                  title:
                    'shell.openExternal(..., {activate:false}) opens in foreground',
                  url: 'https://github.com/electron/electron/issues/12492',
                  labels: {
                    edges: [
                      {
                        node: {
                          color: '8d9ee8',
                          name: '3-1-x'
                        }
                      },
                      {
                        node: {
                          color: 'fbca04',
                          name: 'bug :beetle:'
                        }
                      }
                    ]
                  }
                }
              },
              {
                node: {
                  author: {
                    login: 'jmshal'
                  },
                  closed: false,
                  title: 'BrowserWindow vibrancy is lost after reload',
                  url: 'https://github.com/electron/electron/issues/8310',
                  labels: {
                    edges: [
                      {
                        node: {
                          color: '8d9ee8',
                          name: '4-1-x'
                        }
                      },
                      {
                        node: {
                          color: '8d9ee8',
                          name: '5-0-x'
                        }
                      }
                    ]
                  }
                }
              },
              {
                node: {
                  author: {
                    login: 'PalmerAL'
                  },
                  closed: false,
                  title: "BrowserViews sometimes don't recieve mouse events",
                  url: 'https://github.com/electron/electron/issues/14038',
                  labels: {
                    edges: [
                      {
                        node: {
                          color: '8d9ee8',
                          name: '2-0-x'
                        }
                      },
                      {
                        node: {
                          color: '8d9ee8',
                          name: '3-0-x'
                        }
                      }
                    ]
                  }
                }
              },
              {
                node: {
                  author: {
                    login: 'M0rious'
                  },
                  closed: false,
                  title: 'Electron crashes when restarting application',
                  url: 'https://github.com/electron/electron/issues/17438',
                  labels: {
                    edges: [
                      {
                        node: {
                          color: '8d9ee8',
                          name: '4-1-x'
                        }
                      },
                      {
                        node: {
                          color: '89093e',
                          name: 'blocked/needs-repro ❌'
                        }
                      }
                    ]
                  }
                }
              },
              {
                node: {
                  author: {
                    login: 'wellbeck190'
                  },
                  closed: false,
                  title: "React Devtools can't connect in v5.0.0",
                  url: 'https://github.com/electron/electron/issues/17586',
                  labels: {
                    edges: []
                  }
                }
              },
              {
                node: {
                  author: {
                    login: 'jackple'
                  },
                  closed: false,
                  title: 'video play only sound but no picture',
                  url: 'https://github.com/electron/electron/issues/17607',
                  labels: {
                    edges: []
                  }
                }
              },
              {
                node: {
                  author: {
                    login: 'robatwilliams'
                  },
                  closed: false,
                  title: "'second-instance' event documentation clarification",
                  url: 'https://github.com/electron/electron/issues/17604',
                  labels: {
                    edges: []
                  }
                }
              },
              {
                node: {
                  author: {
                    login: 'harryi3t'
                  },
                  closed: false,
                  title:
                    'Deleting a single cookie deletes multiple cookies where the URLs are subset of given URL',
                  url: 'https://github.com/electron/electron/issues/13557',
                  labels: {
                    edges: [
                      {
                        node: {
                          color: '8d9ee8',
                          name: '4-1-x'
                        }
                      },
                      {
                        node: {
                          color: 'fbca04',
                          name: 'bug :beetle:'
                        }
                      }
                    ]
                  }
                }
              },
              {
                node: {
                  author: {
                    login: 'sachinjain024'
                  },
                  closed: false,
                  title: 'Electron webRequest APIs vs Chrome webRequest APIs',
                  url: 'https://github.com/electron/electron/issues/17602',
                  labels: {
                    edges: []
                  }
                }
              }
            ]
          },
          labels: {
            edges: [
              {
                node: {
                  name: 'enhancement :sparkles:',
                  color: '84b6eb'
                }
              },
              {
                node: {
                  name: 'discussion :speech_balloon:',
                  color: 'e99695'
                }
              },
              {
                node: {
                  name: 'platform/windows',
                  color: 'c7def8'
                }
              },
              {
                node: {
                  name: 'platform/macOS',
                  color: 'c7def8'
                }
              },
              {
                node: {
                  name: 'platform/linux',
                  color: 'c7def8'
                }
              },
              {
                node: {
                  name: 'documentation :notebook:',
                  color: '6addf7'
                }
              },
              {
                node: {
                  name: 'performance :checkered_flag:',
                  color: 'd4c5f9'
                }
              },
              {
                node: {
                  name: 'status/wontfix 🚫',
                  color: 'c2e0c6'
                }
              },
              {
                node: {
                  name: 'component/devtools',
                  color: 'f9d0c4'
                }
              },
              {
                node: {
                  name: 'component/webview',
                  color: 'f9d0c4'
                }
              }
            ]
          }
        }
      }
    })
  }

  componentDidMount() {
    // this.getIssuesAndRepoLabels()
    this.addStaticData()
  }

  render() {
    const { hasLoaded, issues, labels } = this.state
    return (
      <Layout title="Issues" subtitle={this.getPageSubtitle()}>
        <h2>Issues List</h2>
        {hasLoaded ? (
          <>
            <SearchOptions
              labels={labels}
              getIssues={this.getIssuesAndRepoLabels}
              makeCustomParam={this.makeCustomParam}
              makeCustomParams={this.makeCustomParams}
            />
            <IssuesList issues={issues} />
          </>
        ) : (
          <p className="text-white mt-3">Loading...</p>
        )}
      </Layout>
    )
  }
}

export default Issues
