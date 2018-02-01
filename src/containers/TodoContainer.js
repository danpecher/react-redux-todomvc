import React from 'react'
import { connect } from 'react-redux'
import Todo from '../components/Todo'
import { toggleTodo } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    onCompletedChange: (index, completed) => {
      return dispatch(toggleTodo(index, completed))
    }
  }
}

export default connect(undefined, mapDispatchToProps)(Todo)
