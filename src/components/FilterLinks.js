import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { filterTodos } from '../actions'
import FilterLink from './FilterLink'

const FilterLinks = ({ onFilterChange, filter }) => {
  return (
    <ul className="filters">
      <FilterLink
        name={'all'}
        active={filter === 'all'}
        onFilterChange={onFilterChange}
      />
      <FilterLink
        name={'active'}
        active={filter === 'active'}
        onFilterChange={onFilterChange}
      />
      <FilterLink
        name={'completed'}
        active={filter === 'completed'}
        onFilterChange={onFilterChange}
      />
    </ul>
  )
}

FilterLinks.propTypes = {}

const stateToProps = state => {
  return {
    filter: state.filter
  }
}

const dispatchToProps = dispatch => {
  return {
    onFilterChange: filter => dispatch(filterTodos(filter))
  }
}

export default connect(stateToProps, dispatchToProps)(FilterLinks)
