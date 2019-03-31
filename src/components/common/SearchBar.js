import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class SearchBar extends Component {
  handleInputChange = event => {
    event.persist()
    const { setQuery } = this.props
    setQuery(event.target.value)
  }

  getSearchbarClasses = () => {
    const { size } = this.props
    return size === 'large' ? 'w-100 py-2' : ''
  }

  render() {
    const sizeClass = this.getSearchbarClasses()
    const iconStyles = { fill: '#000000' }
    return (
      <div id="search-bar" className={`shadow-lg px-2 mr-3 ${sizeClass}`}>
        <svg
          alt="search icon"
          id="search-btn"
          className="d-inline-block mr-2 align-middle"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 192 192"
          style={iconStyles}
        >
          <g
            fill="none"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            style={{ mixBlendMode: 'normal' }}
          >
            <path d="M0,192v-192h192v192z" fill="none" />
            <g fill="#ffffff">
              <g id="surface1">
                <path d="M80.64,11.52c-36.015,0 -65.28,29.265 -65.28,65.28c0,36.015 29.265,65.28 65.28,65.28c14.25,0 27.42,-4.59 38.16,-12.36l50.52,50.4l10.8,-10.8l-49.92,-50.04c9.81,-11.43 15.72,-26.265 15.72,-42.48c0,-36.015 -29.265,-65.28 -65.28,-65.28zM80.64,19.2c31.86,0 57.6,25.74 57.6,57.6c0,31.86 -25.74,57.6 -57.6,57.6c-31.86,0 -57.6,-25.74 -57.6,-57.6c0,-31.86 25.74,-57.6 57.6,-57.6z" />
              </g>
            </g>
          </g>
        </svg>
        <input
          type="text"
          name="searchQuery"
          className="d-inline-block form-control"
          id="query"
          placeholder="Search..."
          onChange={this.handleInputChange}
        />
      </div>
    )
  }
}

SearchBar.propTypes = {
  setQuery: PropTypes.func.isRequired,
  size: PropTypes.string
}

export default SearchBar
