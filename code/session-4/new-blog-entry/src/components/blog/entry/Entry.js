import React from 'react'
import style from './Entry.module.css'

const BlogEntry = ({ blog }) => {
  return (
    <section>
      <h3>{blog.title}</h3>
      <h5>
        Created by {blog.author}
        <br />
        <span className={style.date}>
          {new Date(blog.created).toDateString()}
        </span>
      </h5>
      <img src={blog.image} alt={blog.title} className={style.image} />
      <p className={style.copy}>{blog.copy}</p>
    </section>
  )
}

export default BlogEntry
