import React, { Component } from 'react'
import Home from './Home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchResults from './SearchResults/SearchResults'
import Issues from './Issues/Issues'
import Detail from './Detail/Detail'

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={SearchResults} path="/search/:query" />
          <Route component={Issues} path="/issues/:owner/:repository" />
          <Route component={Detail} path="/detail/:id" />
        </Switch>
      </Router>
    )
  }
}

export default App
