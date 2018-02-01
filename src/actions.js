export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const TOGGLE_ALL = 'TOGGLE_ALL'

export function addTodo(title) {
  return {
    type: ADD_TODO,
    title
  }
}

export function toggleAll(completed) {
  return {
    type: TOGGLE_ALL,
    completed
  }
}

export function toggleTodo(index, completed) {
  return {
    type: TOGGLE_TODO,
    completed,
    index
  }
}
