function getQueryForComments(commentParams = '') {
  return `
  comments(first: 10${commentParams}) {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      node {
        author {
          login
        }
        body
        updatedAt
      }
    }
  }
  `
}

function getIssueData(nestedFields, id) {
  return `{
    node(id: "${id}") {
      ... on Issue {
        ${nestedFields}
      }
    }
  }`
}

export default function getQuery(id, onlyComments = false, commentParams = '') {
  const comments = getQueryForComments(commentParams)
  let nestedFields = comments
  if (!onlyComments)
    nestedFields += `
    body
    closed
    createdAt
    title
    author {
      login
    }
    labels(first: 10) {
      edges {
        node {
          color
          name
        }
      }
    }
    assignees(first: 10) {
      edges {
        node {
          login
        }
      }
    }
  `
  return getIssueData(nestedFields, id)
}
