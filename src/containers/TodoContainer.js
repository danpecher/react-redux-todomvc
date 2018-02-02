import React from 'react'
import { connect } from 'react-redux'
import Todo from '../components/Todo'
import { editTodo, toggleTodo, updateTodo } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    onCompletedChange: (index, completed) => {
      return dispatch(toggleTodo(index, completed))
    },
    onDoubleClick: index => {
      return dispatch(editTodo(index))
    },
    onFinishEditing: (index, value) => {
      return dispatch(updateTodo(index, value))
    }
  }
}

export default connect(undefined, mapDispatchToProps)(Todo)
