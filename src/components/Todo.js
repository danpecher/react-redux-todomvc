import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Todo = ({
  completed,
  title,
  editing,
  index,
  onCompletedChange,
  onDoubleClick,
  onFinishEditing
}) => {
  const classes = classNames({ completed, editing })

  return (
    <li className={classes}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={e => onCompletedChange(index, e.target.checked)}
        />
        <label onDoubleClick={() => onDoubleClick(index)}>{title}</label>
        <button className="destroy" />
      </div>
      <input
        className="edit"
        defaultValue={title}
        onKeyDown={e => {
          if (e.keyCode === 13) {
            onFinishEditing(index, e.target.value)
          }
        }}
        onBlur={e => onFinishEditing(index, e.target.value)}
      />
    </li>
  )
}

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired,
  onCompletedChange: PropTypes.func.isRequired,
  onDoubleClick: PropTypes.func.isRequired,
  onFinishEditing: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
}

export default Todo
