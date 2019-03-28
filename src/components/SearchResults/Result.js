import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Result extends Component {
  render() {
    const { repoName, selectRepo, selectedRepo } = this.props
    const selectCurrentRepo = () => selectRepo(repoName)
    let btnClasses = 'btn results__itemBtn'
    if (selectedRepo === repoName) {
      btnClasses += '--active'
    }

    return (
      <li className="results__item my-3" onClick={selectCurrentRepo}>
        <button className={btnClasses}>{repoName}</button>
      </li>
    )
  }
}

Result.propTypes = {
  repoName: PropTypes.string.isRequired,
  selectRepo: PropTypes.func.isRequired,
  selectedRepo: PropTypes.string.isRequired
}

export default Result
