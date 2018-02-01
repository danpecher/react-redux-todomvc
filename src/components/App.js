import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Todos from './Todos'
import Footer from './Footer'
import { addTodo, toggleAll } from '../actions'

const App = ({ todos, onEnterTodo, toggleAll }) => {
  return (
    <div>
      <section className="todoapp">
        <Header onEnterTodo={onEnterTodo} />
        <Todos todos={todos} toggleAll={toggleAll} />
        <Footer />
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
