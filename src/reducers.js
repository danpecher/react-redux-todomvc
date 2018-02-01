import { ADD_TODO, TOGGLE_ALL, TOGGLE_TODO } from './actions'

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
    default:
      return state
  }
}
