import {
  ADD_TODO,
  CLEAR_COMPLETED,
  EDIT_TODO,
  TOGGLE_ALL,
  TOGGLE_TODO,
  UPDATE_TODO
} from './actions'

const initialState = {
  todos: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            title: action.title,
            completed: false,
            editing: false
          }
        ]
      }
    case TOGGLE_ALL:
      return {
        todos: state.todos.map(todo => {
          return Object.assign({}, todo, { completed: action.completed })
        })
      }
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo, i) => {
          if (i !== action.index) {
            return todo
          }
          return Object.assign({}, todo, { completed: action.completed })
        })
      }
    case EDIT_TODO:
      return {
        todos: state.todos.map((todo, i) => {
          if (i !== action.index) {
            return Object.assign({}, todo, { editing: false })
          }
          return Object.assign({}, todo, { editing: true })
        })
      }
    case UPDATE_TODO:
      if (action.value === false) {
        return {
          todos: state.todos.map(todo =>
            Object.assign({}, todo, { editing: false })
          )
        }
      }
      return {
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
    case CLEAR_COMPLETED:
      return {
        todos: state.todos
          .map(todo => (todo.completed ? false : todo))
          .filter(Boolean)
      }
    default:
      return state
  }
}
