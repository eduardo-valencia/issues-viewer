export default function getExampleQuery() {
  return {
    data: {
      repository: {
        issues: {
          pageInfo: {
            endCursor:
              'Y3Vyc29yOnYyOpK5MjAxOS0wMy0zMVQyMDo1MzoyNC0wNzowMM4ZeZSG',
            hasNextPage: true
          },
          edges: [
            {
              node: {
                author: {
                  login: 'k8stone'
                },
                closed: false,
                title:
                  'Menu role “windowMenu” incompletely renamed to “window”',
                url: 'https://github.com/electron/electron/issues/17647',
                labels: {
                  edges: [
                    {
                      node: {
                        color: '6addf7',
                        name: 'documentation :notebook:'
                      }
                    }
                  ]
                }
              }
            },
            {
              node: {
                author: {
                  login: 'ckerr'
                },
                closed: false,
                title: 'Legacy Chrome IPC, RenderView are deprecated',
                url: 'https://github.com/electron/electron/issues/11442',
                labels: {
                  edges: [
                    {
                      node: {
                        color: '84b6eb',
                        name: 'enhancement :sparkles:'
                      }
                    }
                  ]
                }
              }
            },
            {
              node: {
                author: {
                  login: 'AoDev'
                },
                closed: false,
                title:
                  'Degraded UI performance from 2.x to 3.x/4.x (GPU not enabled?)',
                url: 'https://github.com/electron/electron/issues/17641',
                labels: {
                  edges: []
                }
              }
            },
            {
              node: {
                author: {
                  login: 'atanas-tick42'
                },
                closed: false,
                title:
                  'First opened electron window takes 20 seconds more time to initialize than second one',
                url: 'https://github.com/electron/electron/issues/11381',
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
                  login: 'erik-ciq'
                },
                closed: false,
                title: 'Memory Leak when using Affinity',
                url: 'https://github.com/electron/electron/issues/16319',
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
                  login: 'gannons'
                },
                closed: false,
                title:
                  'Received signal 11 SEGV_MAPERR 000000000000 when using npm module rather than browserify',
                url: 'https://github.com/electron/electron/issues/17645',
                labels: {
                  edges: []
                }
              }
            },
            {
              node: {
                author: {
                  login: 'Zrylhh'
                },
                closed: false,
                title: 'No such module: atom_common_event',
                url: 'https://github.com/electron/electron/issues/17638',
                labels: {
                  edges: []
                }
              }
            },
            {
              node: {
                author: {
                  login: 'rodent129'
                },
                closed: false,
                title:
                  'The camera and microphone access issue on electron after signing the app for mac os',
                url: 'https://github.com/electron/electron/issues/17640',
                labels: {
                  edges: []
                }
              }
            },
            {
              node: {
                author: {
                  login: 'redders6600'
                },
                closed: false,
                title:
                  'Problem when spawning process from node with IPC enabled with electron >v2',
                url: 'https://github.com/electron/electron/issues/17044',
                labels: {
                  edges: [
                    {
                      node: {
                        color: '8d9ee8',
                        name: '3-0-x'
                      }
                    },
                    {
                      node: {
                        color: '8d9ee8',
                        name: '4-1-x'
                      }
                    }
                  ]
                }
              }
            },
            {
              node: {
                author: {
                  login: 'runzi'
                },
                closed: false,
                title:
                  'Electron is compiled very large in debian, and the size of the electron file is 2.83G',
                url: 'https://github.com/electron/electron/issues/17630',
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
  }
}
