export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const TOGGLE_ALL = 'TOGGLE_ALL'
export const EDIT_TODO = 'EDIT_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'

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

export function editTodo(index) {
  return {
    type: EDIT_TODO,
    index
  }
}

export function updateTodo(index, value) {
  return {
    type: UPDATE_TODO,
    index,
    value: value ? value.trim() : value
  }
}

export function clearCompleted() {
  return {
    type: CLEAR_COMPLETED
  }
}
