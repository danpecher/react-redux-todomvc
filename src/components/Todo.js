import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Todo extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    if (this.props.editing) {
      this.refs.input.focus()
      this.refs.input.setSelectionRange(
        this.props.title.length,
        this.props.title.length
      )
    }
  }

  render() {
    const {
      completed,
      title,
      editing,
      index,
      onCompletedChange,
      onDoubleClick,
      onFinishEditing,
      onRemove
    } = this.props
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
          <label
            onDoubleClick={e => onDoubleClick(index)}
            onMouseDown={e => {
              // prevent select on double-click
              if (e.detail > 1) {
                e.preventDefault()
              }
            }}
          >
            {title}
          </label>
          <button className="destroy" onClick={() => onRemove(index)} />
        </div>
        <input
          className="edit"
          defaultValue={title}
          ref={'input'}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              onFinishEditing(index, e.target.value)
            }
            if (e.keyCode === 27) {
              onFinishEditing(index, e.target.value.length > 0 ? title : false)
              this.refs.input.value = title
            }
          }}
          onBlur={e => editing && onFinishEditing(index, e.target.value)}
        />
      </li>
    )
  }
}

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired,
  onCompletedChange: PropTypes.func.isRequired,
  onDoubleClick: PropTypes.func.isRequired,
  onFinishEditing: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
}

export default Todo
