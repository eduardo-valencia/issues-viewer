import React, { Component } from 'react'
import Layout from '../Layout/Layout'
import Footer from './Footer'
import Search from './Search'
import '../../scss/Home/utilities/manifest.scss'

export class Home extends Component {
  render() {
    return (
      <Layout title="Home">
        <Search />
        <Footer />
      </Layout>
    )
  }
}

export default Home
