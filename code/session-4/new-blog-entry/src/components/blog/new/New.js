import React, { useState } from 'react'
import style from './New.module.css'

const New = ({ onNewPost }) => {
  const [title, setTitle] = useState('')
  const changeTitle = (event) => {
    const value = event.currentTarget.value
    setTitle(value)
  }

  const [publish, setPublish] = useState(false);
  const changePublish = (event) => {
    const value = event.currentTarget.checked;
    setPublish(value);
  }

  const [author, setAuthor] = useState('')
  const changeAuthor = (event) => {
    const value = event.currentTarget.value
    setAuthor(value)
  }

  const [copy, setCopy] = useState('')
  const changeCopy = (event) => {
    const value = event.currentTarget.value
    setCopy(value)
  }

  const [image, setImage] = useState('')
  const changeImage = (event) => {
    const value = event.currentTarget.value
    setImage(value)
  }

  const buttonLabel = publish ? 'publish now' : 'create only';

  const handleClick = (event) => {
    event.preventDefault();

    const newPost = {
      publish,
      title,
      author,
      copy,
      image
    };

    console.log(newPost);

    if (onNewPost) {
      onNewPost(newPost);
    }
  }

  return (
    <form className={style.new}>
      <h3 className={style.headline}>Create New Entry</h3>

      <input
        type="checkbox"
        name="publish"
        id="publish"
        value={publish}
        onChange={changePublish}
        className={style.checkbox}
      />
      <label htmlFor="publish" className={style.labelInline}>publish</label>

      <label htmlFor="title" className={style.label}>Title</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Your Blog Title"
        value={title}
        onChange={changeTitle}
        className={style.input}
      />

      <label htmlFor="author" className={style.label}>Author</label>
      <input
        type="text"
        name="author"
        id="author"
        value={author}
        onChange={changeAuthor}
        className={style.input}
      />

      <label htmlFor="copy" className={style.label}>Copy</label>
      <textarea
        className={style.textarea}
        name="copy"
        id="copy"
        value={copy}
        onChange={changeCopy}
      />

      <label htmlFor="image" className={style.label}>Image Path</label>
      <input
        type="text"
        name="image"
        id="image"
        className={style.input}
        value={image}
        onChange={changeImage}
      />

      <button type="submit" className={style.button} onClick={handleClick}>
        {buttonLabel}
      </button>
    </form>
  )
}

export default New
