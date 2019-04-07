import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class SortOrderBtns extends Component {
  getAbbreviatedOrder = orderName => {
    const orderNamesToAbbreviations = {
      Ascending: 'ASC',
      Descending: 'DESC'
    }
    return orderNamesToAbbreviations[orderName]
  }

  setOrder = order => {
    const { setOption, sortOptions } = this.props
    const orderID = this.getAbbreviatedOrder(order)
    setOption({ ...sortOptions, order: orderID })
  }

  isOptionSelected = currentOrder => {
    const { order } = this.props.sortOptions
    const shortOptionName = this.getAbbreviatedOrder(currentOrder)
    if (shortOptionName === order) return true
    return false
  }

  getSortOptions = () => {
    const options = ['Ascending', 'Descending']
    return options.map((option, index) => {
      let btnName = 'btn-c-tertiary'
      if (this.isOptionSelected(option)) {
        btnName += '--active'
      }
      return (
        <button
          className={`${btnName} btn mr-3 text-white`}
          onClick={() => this.setOrder(option)}
          key={index}
        >
          {option}
        </button>
      )
    })
  }

  render() {
    return (
      <div className="d-flex justify-content-between">
        {this.getSortOptions()}
      </div>
    )
  }
}

SortOrderBtns.propTypes = {
  setOption: PropTypes.func.isRequired,
  sortOptions: PropTypes.object.isRequired
}

export default SortOrderBtns
