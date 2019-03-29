import React, { Component } from 'react'
import Option from '../Option'
import PropTypes from 'prop-types'

export class Status extends Component {
  getBtnClasses = btnName => {
    const { filterByOpen } = this.props
    const isOpen = btnName === 'Open' ? true : false
    let btnClassName = isOpen ? 'issue__openBtn' : 'issue__closeBtn'
    const nameMatchesState = isOpen === filterByOpen
    if (nameMatchesState) btnClassName += '--active'
    return `btn mr-3 ${btnClassName}`
  }

  createBtn = (btnName, index) => {
    const { setOpenOrClosed } = this.props
    const isOpen = btnName === 'Open' ? true : false
    const btnClasses = this.getBtnClasses(btnName)
    return (
      <button
        className={btnClasses}
        key={index}
        onClick={() => setOpenOrClosed(isOpen)}
      >
        {btnName}
      </button>
    )
  }

  createOpenAndCloseBtns = () => {
    const options = ['Open', 'Closed']
    return options.map(this.createBtn)
  }

  render() {
    return (
      <Option name="Status">
        <div className="d-flex justify-content-between">
          {this.createOpenAndCloseBtns()}
        </div>
      </Option>
    )
  }
}

Status.propTypes = {
  setOpenOrClosed: PropTypes.func.isRequired,
  filterByOpen: PropTypes.bool.isRequired
}

export default Status
