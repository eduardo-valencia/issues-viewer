import React, { Component } from 'react'
import Layout from '../Layout/Layout'
import Search from '../common/Search'
import '../../scss/Home/utilities/manifest.scss'

export class Home extends Component {
  render() {
    return (
      <Layout title="Home" showSearchBar={false}>
        <Search size="large" />
      </Layout>
    )
  }
}

export default Home
