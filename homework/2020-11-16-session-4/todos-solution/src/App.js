import React, { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

export default function App() {
  // define the state "todos"
  // it contains all todo's in an array
  const [todos, setTodos] = useState([])
  const [filterbyOpen, setFilterByOpen] = useState(false)

  const addTodo = todo => {
    // add the code here
    // addTodo adds a new Todo into the list of all todo's
    setTodos([...todos, { ...todo, id: todos.length }])
  }

  const updateTodo = todoNew => {
    // updateTodo takes a new todo "todoNew" and
    // updates the matching todo in the todo's list
    // add the code here
    const todosNew = todos.map(todo => {
      if (todo.id === todoNew.id) {
        return todoNew
      }
      return todo
    })
    setTodos(todosNew)
  }

  const setOpenFilter = () => {
    // sets as showOpen filter
    // add the code here
    setFilterByOpen(true)
  }

  const resetFilter = () => {
    // resets the filter
    // add the code here
    setFilterByOpen(false)
  }


  return (
    <div className="App">
      <h1>Todo's</h1>

      {/* Clicking the "Show only open" button, filters the list by only done todo's */}
      <button type="button" onClick={setOpenFilter}>Show only open</button>

      {/* Clicking the "Show All" button, should reset the filtering and show all todo's again,
        * so opened and completed one.
      */}
      <button type="button" onClick={resetFilter}>Show All</button>

      <div style={{color: 'red', fontSize: '0.8em'}}>{filterbyOpen ? 'The show only open filter is active' : ''}</div>

      {/* Place here a AddTodo component, which contains the form for adding a new todo to the list  */}
      <AddTodo add={addTodo} />

      {/* Place here a TodoList component, which lists all todos */}
      <TodoList todos={filterbyOpen ? todos.filter(todo => todo.status === 'open') : todos} updateTodo={updateTodo} />

    </div>
  )
}

