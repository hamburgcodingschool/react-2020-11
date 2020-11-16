import React from 'react'
import BlogEntry from '../entry/Entry'
import style from './List.module.css'

const BlogEntryList = ({ list }) => {
  return (
    <>
      {list && list.length && (
        <ul className={style.list}>
          {list.map((blogEntry, index) => {
            return (
              <li key={index + 1} className={style.item}>
                <BlogEntry blog={blogEntry} />
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}

export default BlogEntryList
