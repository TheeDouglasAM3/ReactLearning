import React, { useReducer, useState } from 'react'
import Todo from '../components/Todo'

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle_todo',
  DELETE_TODO: 'delete_todo'
}

const HookUseReducer2 = () => {

  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')
  
  function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...todos, newTodos(action.payload.name)]
      
      case ACTIONS.TOGGLE_TODO:
        return todos.map(todo => {
          if (todo.id === action.payload.id) {
            return {...todo, complete: !todo.complete}
          }
          return todo
        })
      
      case ACTIONS.DELETE_TODO:
        return todos.filter(todo => todo.id !== action.payload.id)

      default:
        return todos
    }
  }

  function newTodos(name) {
    return {
      id: Date.now(),
      name: name,
      complete: false,
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch({ 
      type: ACTIONS.ADD_TODO,
      payload: { name: name }
    })
    setName('')
  }

  console.log(todos)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </form>
      {todos.map(todo => {
        return <Todo 
          key={todo.id}
          todo={todo}
          dispatch={dispatch}
        />
      })}
    </>
  )
}

export default HookUseReducer2