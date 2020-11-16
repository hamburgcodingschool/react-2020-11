import React from 'react'
import './App.css'

export default function App() {
  // define the state "todos"
  // it contains all todo's in an array


  const addTodo = todo => {
    // addTodo adds a new Todo into the list of all todo's
    // add the code here
  }

  const updateTodo = todoNew => {
    // updateTodo takes a new todo "todoNew" and
    // updates the matching todo in the todo's list
    // add the code here
  }

  const setOpenFilter = () => {
    // sets as showOpen filter
    // add the code here
  }

  const resetFilter = () => {
    // resets the filter
    // add the code here
  }


  return (
    <div className="App">
      <h1>Todo's</h1>
      {/* Clicking the "Show only open" button, filters the list by only done todo's */}
      <button type="button">Show only open</button>

      {/* Clicking the "Show All" button, should reset the filtering and show all todo's again,
        * so opened and completed one.
        */}
      <button type="button">Show All</button>

      {/* Place here a AddTodo component, which contains the form for adding a new todo to the list  */}
      {/* <AddTodo ... /> */}

      {/* Place here a TodoList component, which lists all todos */}
      {/* <TodoList ... */}

    </div>
  )
}

