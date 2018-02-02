import {
  ADD_TODO,
  CLEAR_COMPLETED,
  EDIT_TODO,
  FILTER_TODOS,
  REMOVE_TODO,
  TOGGLE_ALL,
  TOGGLE_TODO,
  UPDATE_TODO
} from './actions'

const initialState = localStorage.getItem('todos-redux')
  ? JSON.parse(localStorage.getItem('todos-redux'))
  : {
      todos: [],
      filter: 'all'
    }

export default (state = initialState, action) => {
  let result = state

  switch (action.type) {
    case ADD_TODO:
      result = {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.title,
            completed: false,
            editing: false
          }
        ]
      }
      break
    case TOGGLE_ALL:
      result = {
        ...state,
        todos: state.todos.map(todo => {
          return Object.assign({}, todo, { completed: action.completed })
        })
      }
      break
    case TOGGLE_TODO:
      result = {
        ...state,
        todos: state.todos.map((todo, i) => {
          if (i !== action.index) {
            return todo
          }
          return Object.assign({}, todo, { completed: action.completed })
        })
      }
      break
    case EDIT_TODO:
      result = {
        ...state,
        todos: state.todos.map((todo, i) => {
          if (i !== action.index) {
            return Object.assign({}, todo, { editing: false })
          }
          return Object.assign({}, todo, { editing: true })
        })
      }
      break
    case UPDATE_TODO:
      if (action.value === false) {
        result = {
          ...state,
          todos: state.todos.map(todo =>
            Object.assign({}, todo, { editing: false })
          )
        }
      }
      result = {
        ...state,
        todos: state.todos
          .map((todo, i) => {
            if (i !== action.index) {
              return todo
            }
            return action.value.length > 0
              ? Object.assign({}, todo, {
                  title: action.value,
                  editing: false
                })
              : false
          })
          .filter(Boolean)
      }
      break
    case REMOVE_TODO:
      result = {
        ...state,
        todos: state.todos.filter((todo, i) => i !== action.index)
      }
      break
    case CLEAR_COMPLETED:
      result = {
        ...state,
        todos: state.todos
          .map(todo => (todo.completed ? false : todo))
          .filter(Boolean)
      }
      break
    case FILTER_TODOS:
      result = {
        ...state,
        filter: action.filter
      }
  }

  localStorage.setItem('todos-redux', JSON.stringify(result))

  return result
}
