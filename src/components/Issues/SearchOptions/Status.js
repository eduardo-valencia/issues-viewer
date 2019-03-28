import React, { Component } from 'react'
import Option from './Option'
import PropTypes from 'prop-types'

export class Status extends Component {
  state = {
    open: true
  }

  createBtn = (btnName, index) => {
    const { setOpenOrClosed } = this.props
    const isOpen = btnName === 'Open' ? true : false
    const btnClassName = isOpen ? 'btn-success' : 'btn-danger'
    return (
      <button
        className={`btn ${btnClassName}`}
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
  setOpenOrClosed: PropTypes.func.isRequired
}

export default Status
