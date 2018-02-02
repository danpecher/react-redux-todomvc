import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Todos from './Todos'
import Footer from './Footer'
import { addTodo, toggleAll, clearCompleted } from '../actions'

const App = ({ todos, onEnterTodo, toggleAll, onClearCompleted }) => {
  const incompleteItemsCount = todos.filter(todo => !todo.completed).length

  return (
    <div>
      <section className="todoapp">
        <Header onEnterTodo={onEnterTodo} />
        {todos.length > 0 && <Todos todos={todos} toggleAll={toggleAll} />}
        {todos.length > 0 && (
          <Footer
            itemsCount={incompleteItemsCount}
            displayClearBtn={todos.length - incompleteItemsCount > 0}
            onClearCompleted={onClearCompleted}
          />
        )}
      </section>

      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>
          Created by <a href="http://todomvc.com">Danny P</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEnterTodo: title => {
      dispatch(addTodo(title))
    },
    toggleAll: completed => {
      dispatch(toggleAll(completed))
    },
    onClearCompleted: () => dispatch(clearCompleted())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
