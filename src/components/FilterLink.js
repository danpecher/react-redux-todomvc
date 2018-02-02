import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const FilterLink = ({ name, active, onFilterChange }) => {
  return (
    <li>
      <a
        className={classNames({ selected: active })}
        href=""
        onClick={e => {
          e.preventDefault()
          onFilterChange(name)
        }}
      >
        {name}
      </a>
    </li>
  )
}

FilterLink.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onFilterChange: PropTypes.func.isRequired
}

export default FilterLink
