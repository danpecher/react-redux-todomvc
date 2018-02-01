import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ completed, title, editing, onCompletedChange, index }) => {
  return (
    <li className={completed ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={e => onCompletedChange(index, e.target.checked)}
        />
        <label>{title}</label>
        <button className="destroy" />
      </div>
      <input className="edit" value="Create a TodoMVC template" readOnly />
    </li>
  )
}

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired,
  onCompletedChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
}

export default Todo
