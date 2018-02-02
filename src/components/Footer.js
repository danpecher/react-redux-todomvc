import React from 'react'
import PropTypes from 'prop-types'
import FilterLinks from './FilterLinks'

const pluralize = (number, word) => {
  if (number === 1) {
    return word
  }
  return `${word}s`
}

const Footer = ({ itemsCount, displayClearBtn, onClearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsCount}</strong> {pluralize(itemsCount, 'item')} left
      </span>
      <FilterLinks />
      {displayClearBtn && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  )
}

Footer.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  displayClearBtn: PropTypes.bool.isRequired,
  onClearCompleted: PropTypes.func.isRequired
}

export default Footer
