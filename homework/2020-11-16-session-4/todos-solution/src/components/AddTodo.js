import React, { useState } from 'react'

const AddTodo = ({ add }) => {
  const [text, setText] = useState('')
  const handleFormSubmit = event => {
    event.preventDefault()
    add({
      date: Date.now(),
      status: 'open',
      text,
    })
    // reset Test
    setText('')
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={text}
        name="todo"
        id="todo"
        placeholder="Your Todo"
        required={true}
        onChange={e => setText(e.currentTarget.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodo
