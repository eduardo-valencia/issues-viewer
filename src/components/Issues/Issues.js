import React, { Component } from 'react'
import Layout from '../Layout/Layout'
import getData from '../common/requests'
import IssuesList from './IssuesList'
import Filters from './SearchOptions/Filters'
import '../../scss/Issues/utilities/manifest.scss'

export class Issues extends Component {
  state = {
    issues: null,
    labels: null,
    hasLoaded: false
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
    console.log(data)
    const { issues, labels } = data.data.repository
    this.setState(prevState => ({
      ...prevState,
      issues: issues.edges,
      labels: labels.edges,
      hasLoaded: true
    }))
  }

  makeLabelsFiltersAsQuery = labelsFilters => {
    return `labels:["${labelsFilters.join('", "')}"]`
  }

  makeStatusFilter = statusFilter => {
    return `states:${statusFilter}`
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

  getQuery = (labelsFilters = null, statusFilter = null) => {
    const { repository, owner } = this.props.match.params
    let filters = ''
    if (labelsFilters || statusFilter) {
      filters = this.makeFiltersIntoQuery(labelsFilters, statusFilter)
    }
    return `
    query {
      repository(name:"${repository}", owner:"${owner}") {
        issues(orderBy: { direction:DESC, field:UPDATED_AT }, first:10${filters}) {
          edges {
            node {
              author {
                login
              }
              closed
              title
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

  getIssuesAndRepoLabels = (labelsFilters = null, statusFilters = null) => {
    const query = this.getQuery(labelsFilters, statusFilters)
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
                    login: 'MarshallOfSound'
                  },
                  closed: false,
                  title:
                    'autoUpdater does not work when have authenticated proxy',
                  labels: {
                    edges: [
                      {
                        node: {
                          color: 'fbca04',
                          name: 'bug :beetle:'
                        }
                      },
                      {
                        node: {
                          color: 'f9d0c4',
                          name: 'component/auto-updater'
                        }
                      }
                    ]
                  }
                }
              },
              {
                node: {
                  author: {
                    login: 'Lukypie'
                  },
                  closed: true,
                  title: '144Hz scrolling support on Linux',
                  labels: {
                    edges: []
                  }
                }
              },
              {
                node: {
                  author: {
                    login: 'Stoyvo'
                  },
                  closed: false,
                  title: 'CMD+R Event not captured',
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
                    login: 'ogadit'
                  },
                  closed: true,
                  title:
                    "Failed at the electron@1.4.13 postinstall script 'node install.js'",
                  labels: {
                    edges: [
                      {
                        node: {
                          color: '89093e',
                          name: 'blocked/need-info ❌'
                        }
                      }
                    ]
                  }
                }
              },
              {
                node: {
                  author: {
                    login: 'FHGDev'
                  },
                  closed: true,
                  title:
                    'TypeError: Electron.BrowserWindow is not a constructor',
                  labels: {
                    edges: [
                      {
                        node: {
                          color: '89093e',
                          name: 'blocked/need-info ❌'
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
                    login: 'vladimiry'
                  },
                  closed: false,
                  title:
                    'loadURL / loadFile calls throw "ERR_ABORTED (-3) error" if location.hash or history.pushState called on the page before page loaded',
                  labels: {
                    edges: [
                      {
                        node: {
                          color: '8d9ee8',
                          name: '5-0-x'
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
                    login: 'tcd156'
                  },
                  closed: false,
                  title: 'AudioThread Taking over Webcam',
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
                    login: 'bitdisaster'
                  },
                  closed: false,
                  title: 'netlog properties are not properties',
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
                    login: 'DictumMortuum'
                  },
                  closed: false,
                  title: 'Background color is slightly off in electron apps',
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
                    login: 'UoToGK'
                  },
                  closed: true,
                  title: 'Create and Closed Webview, Memory Increase',
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
            <Filters labels={labels} getIssues={this.getIssuesAndRepoLabels} />
            <IssuesList issues={issues} />
          </>
        ) : (
          'Loading...'
        )}
      </Layout>
    )
  }
}

export default Issues
