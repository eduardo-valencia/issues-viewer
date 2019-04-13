import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Result extends Component {
  render() {
    const { repoName, selectRepo, selectedRepo } = this.props
    const selectCurrentRepo = () => selectRepo(repoName)
    let btnClasses = 'btn '
    if (selectedRepo === repoName) {
      btnClasses += 'btn-c-primary'
    } else {
      btnClasses += 'results__itemBtn'
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
  selectedRepo: PropTypes.string
}

export default Result
