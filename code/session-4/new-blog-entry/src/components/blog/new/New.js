import React, { useState } from 'react'
import style from './New.module.css'

const New = () => {
  const [text, setText] = useState('')
  const changeText = (event) => {
    const value = event.currentTarget.value
    setText(value)
  }

  return (
    <form className={style.new}>
      <h3 className={style.headline}>Create New Entry</h3>

      <input
        type="checkbox"
        name="publish"
        id="publish"
        className={style.checkbox}
      />
      <label htmlFor="publish" className={style.labelInline}>publish</label>

      <label htmlFor="title" className={style.label}>Title</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Your Blog Title"
        value={text}
        onChange={changeText}
        className={style.input}
      />

      <label htmlFor="author" className={style.label}>Author</label>
      <input
        type="text"
        name="author"
        id="author"
        className={style.input}
      />

      <label htmlFor="copy" className={style.label}>Copy</label>
      <textarea
        className={style.textarea}
        name="copy"
        id="copy"
      />

      <label htmlFor="image" className={style.label}>Image Path</label>
      <input
        type="text"
        name="image"
        id="image"
        className={style.input}
      />

      <button type="submit" className={style.button}>
        create only
      </button>
    </form>
  )
}

export default New
