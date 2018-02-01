import React from 'react'
import TodoContainer from '../containers/TodoContainer'
import PropTypes from 'prop-types'

const Todos = ({ todos, toggleAll }) => {
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
        {todos.map((todo, i) => (
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
  todos: PropTypes.array,
  toggleAll: PropTypes.func
}

export default Todos
