import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ onEnterTodo }) => {
  return (
    <header className={'header'}>
      <h1>todos</h1>
      <input
        className={'new-todo'}
        onKeyDown={e => {
          if (e.keyCode === 13 && e.target.value !== '') {
            onEnterTodo(e.target.value.trim())
            e.target.value = ''
          }
        }}
        placeholder="What needs to be done?"
        autoFocus
      />
    </header>
  )
}

Header.propTypes = {
  onEnterTodo: PropTypes.func.isRequired
}

export default Header
