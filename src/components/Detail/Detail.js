import React, { Component } from 'react'
import Layout from '../Layout/Layout'
import getDetailData from './detailData'
import Metadata from './Metadata'
import '../../scss/Detail/utilities/manifest.scss'
import Description from './Description'
import Comments from './Comments'
import { makeCustomParam, makeCustomParams } from '../common/query'
import getData from '../common/requests'
import getQuery from './detailQuery'
import IssueInfo from './IssueInfo/IssueInfo'

export class Detail extends Component {
  state = {
    data: null
  }

  setStaticData = () => {
    this.setState(prevState => ({
      ...prevState,
      data: getDetailData().data.node
    }))
  }

  componentDidMount() {
    this.setStaticData()
    // this.getIssueData()
  }

  getSubtitle = () => {
    const { data } = this.state
    if (data) {
      return `Posted by ${data.author.login}`
    }
  }

  getTitle = () => {
    const { data } = this.state
    return data ? data.title : 'Loading...'
  }

  appendCommentsFromData = data => {
    const { edges: newEdges, pageInfo } = data.data.node.comments
    this.setState(prevState => {
      const { data } = prevState
      const { comments } = data
      return {
        ...prevState,
        data: {
          ...data,
          comments: {
            ...comments,
            edges: [...comments.edges, ...newEdges],
            pageInfo: pageInfo
          }
        }
      }
    })
  }

  buildCommentParams = () => {
    const { endCursor } = this.state.data.comments.pageInfo
    return makeCustomParam('after', `"${endCursor}"`)
  }

  buildParams = () => {
    const params = [this.buildCommentParams()]
    return makeCustomParams(params)
  }

  getAndAppendComments = () => {
    const { id: issueID } = this.props.match.params
    const params = this.buildParams()
    const query = getQuery(issueID, true, params)
    getData(query, this.appendCommentsFromData)
  }

  addDataToState = data => {
    this.setState(prevState => ({
      ...prevState,
      data: data.data.node
    }))
  }

  getIssueData = (dataHandler = this.addDataToState) => {
    const { id: issueID } = this.props.match.params
    const query = getQuery(issueID)
    getData(query, dataHandler)
  }

  render() {
    const { data } = this.state
    return (
      <Layout
        title={this.getTitle()}
        subtitle={this.getSubtitle()}
        navBarContents={<IssueInfo data={data} />}
        showSearchBar={false}
      >
        <Metadata data={data} />
        <Description data={data} />
        <Comments
          data={data}
          getAndAppendComments={this.getAndAppendComments}
        />
      </Layout>
    )
  }
}

export default Detail
