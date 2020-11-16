import React from 'react'
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <h2 className={style.title}>The Coding School Blog</h2>
      <img src="//source.unsplash.com/XJXWbfSo2f0" alt="CS Blog" className={style.image} />
    </header>
  )

}

export default Header
