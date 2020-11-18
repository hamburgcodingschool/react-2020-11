import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, updateTodo }) => {
  return (
    <div>
      <h3>Todo's</h3>
      <ul style={{ listStyle: 'none' }}>
        {todos &&
          todos.map(todo => (
            <li key={todo.id}>
              <Todo todo={todo} updateTodo={updateTodo} />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default TodoList
