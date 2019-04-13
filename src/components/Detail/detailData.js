export default function getExampleData() {
  return {
    data: {
      node: {
        __typename: 'Issue',
        body:
          '* Output of `node_modules/.bin/electron --version`: v3.0.0\r\n* Operating System (Platform and Version): Win 10 x64\r\nI\'m using VS code for developing.\r\n\r\n**Expected Behavior**\r\nWorking without any error.\r\n\r\n**Actual behavior**\r\n```\r\n[18244:0919/160757.998:ERROR:CONSOLE(22)] "Empty response arrived for script \'chrome-devtools://devtools/remote/serve_file/@164c37e3f235134c88e80fac2a182cfba3f07f00/product_registry_impl/product_registry_impl_module.js\'", source: chrome-devtools://devtools/bundled/shell.js (22)\r\n[18244:0919/160757.999:ERROR:CONSOLE(106)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/shell.js (106)\r\n```\r\n\r\n**To Reproduce**\r\nClone electron-quick-start. Start project (npm start). Open chrome dev-tools (ctrl+shift+i), switch to Network tab and punch F5. And error will appears in terminal.',
        author: {
          login: 'GitNomster'
        },
        closed: false,
        createdAt: '2018-09-19T11:12:53Z',
        title: 'Devtools errors',
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
                color: 'fbca04',
                name: 'bug :beetle:'
              }
            },
            {
              node: {
                color: 'c7def8',
                name: 'platform/windows'
              }
            }
          ]
        },
        assignees: {
          edges: []
        },
        comments: {
          pageInfo: {
            endCursor: 'Y3Vyc29yOnYyOpHOGujAsQ==',
            hasNextPage: true
          },
          edges: [
            {
              node: {
                author: {
                  login: 'welcome'
                },
                body:
                  "👋 Thanks for opening your first issue here! If you're reporting a 🐞 bug, please make sure you include steps to reproduce it. We get a lot of issues on this repo, so please be patient and we will get back to you as soon as we can.\n\nTo help make it easier for us to investigate your issue, please follow the [contributing guidelines](https://github.com/electron/electron/blob/master/CONTRIBUTING.md).\n",
                updatedAt: '2018-09-19T11:12:56Z'
              }
            },
            {
              node: {
                author: {
                  login: 'anvaynk'
                },
                body: '+1',
                updatedAt: '2018-10-03T15:38:01Z'
              }
            },
            {
              node: {
                author: {
                  login: 'samuelt1'
                },
                body: 'duplicate of #12185',
                updatedAt: '2018-11-09T23:06:37Z'
              }
            },
            {
              node: {
                author: {
                  login: 'abelce'
                },
                body: '  \\+ 1',
                updatedAt: '2018-11-14T15:25:54Z'
              }
            },
            {
              node: {
                author: {
                  login: 'gmonte'
                },
                body: '+1',
                updatedAt: '2018-11-20T14:19:07Z'
              }
            },
            {
              node: {
                author: {
                  login: 'kusturitza'
                },
                body: '+1',
                updatedAt: '2018-11-25T22:27:52Z'
              }
            },
            {
              node: {
                author: {
                  login: 'AkonXI'
                },
                body: '+1',
                updatedAt: '2018-11-27T06:23:38Z'
              }
            },
            {
              node: {
                author: {
                  login: 'GitNomster'
                },
                body: 'Still persist in electron 4.0.0.',
                updatedAt: '2018-12-21T05:06:26Z'
              }
            },
            {
              node: {
                author: {
                  login: 'drone1'
                },
                body: '+1',
                updatedAt: '2018-12-26T23:28:28Z'
              }
            },
            {
              node: {
                author: {
                  login: 'sarthology'
                },
                body: '+1',
                updatedAt: '2019-01-04T14:39:36Z'
              }
            }
          ]
        }
      }
    }
  }
}
