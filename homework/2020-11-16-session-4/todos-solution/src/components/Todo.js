import React from 'react'

const Todo = ({ todo, updateTodo }) => {
  const checked = todo.status === 'done'
  const handleChecked = e => {
    updateTodo({ ...todo, status: e.currentTarget.checked ? 'done' : 'open' })
  }

  return (
    <section>
      <input
        type="checkbox"
        name="status"
        id="status"
        onChange={handleChecked}
        value="done"
        checked={checked}
      />
      <label htmlFor="status">
        {todo.text} <span style={{ fontStyle: 'oblique', fontSize: '.8em' }}>{todo.status}</span>
      </label>

    </section>
  )
}

export default Todo
