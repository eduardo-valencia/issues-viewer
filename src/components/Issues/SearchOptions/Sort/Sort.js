import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SubmitOptionsBtn from '../SubmitOptionBtn'
import OptionsContainer from '../OptionsContainer'
import Option from '../Option'
import SortOrderBtns from './SortOrderBtns'

export class Sort extends Component {
  render() {
    const { updateIssues, setOption, sortOptions } = this.props
    return (
      <OptionsContainer name="Sort" id="sort-container">
        <Option name="Sort Order">
          <SortOrderBtns setOption={setOption} sortOptions={sortOptions} />
          <SubmitOptionsBtn name="Sort" updateIssues={updateIssues} />
        </Option>
      </OptionsContainer>
    )
  }
}

Sort.propTypes = {
  sortOptions: PropTypes.object.isRequired,
  setOption: PropTypes.func.isRequired,
  updateIssues: PropTypes.func.isRequired
}

export default Sort
