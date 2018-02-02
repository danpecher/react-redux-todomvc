import React from 'react'
import TodoContainer from '../containers/TodoContainer'
import PropTypes from 'prop-types'

const isTodoVisible = (completed, filter) => {
  return (
    (filter === 'active' && !completed) ||
    (filter === 'completed' && completed) ||
    filter === 'all'
  )
}

const Todos = ({ todos, toggleAll, filter }) => {
  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={e => {
          toggleAll(e.target.checked)
        }}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos
          .filter(todo => isTodoVisible(todo.completed, filter))
          .map((todo, i) => (
            <TodoContainer
              key={i}
              index={i}
              title={todo.title}
              completed={todo.completed}
              editing={todo.editing}
            />
          ))}
      </ul>
    </section>
  )
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleAll: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
}

export default Todos
