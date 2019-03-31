import React from 'react'
import PropTypes from 'prop-types'
import Search from '../common/Search'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  const { showSearchBar } = props
  return (
    <nav className="navbar navbar-expand-lg navbar-dark container">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbar">
        <p className="navbar-brand mb-0 py-0">Issues Viewer</p>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link className="nav-link py-0" to="/">
              Home
            </Link>
          </li>
        </ul>
        {showSearchBar === false ? null : <Search />}
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  showSearchBar: PropTypes.bool
}
