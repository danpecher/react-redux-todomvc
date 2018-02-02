import React from 'react'
import PropTypes from 'prop-types'

const pluralize = (number, word) => {
  if (number === 1) {
    return word
  }
  return `${word}s`
}

const Footer = ({itemsCount}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsCount}</strong> {pluralize(itemsCount, 'item')} left
      </span>
      <ul className="filters">
        <li>
          <a className="selected" href="#/">
            All
          </a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}

Footer.propTypes = {
  itemsCount: PropTypes.number.isRequired
}

export default Footer
