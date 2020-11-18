import React from 'react'
import './Navigation.css'

const Navigation = ({ entries }) => {
  let isOpen = false
  const toggleMenu = () => {
    isOpen = !isOpen
  }

  return (
    <nav>
      <div className="open" onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </div>
      <Menu entries={entries} isOpen={isOpen} />
    </nav>
  )
}

const Menu = ({ entries, isOpen }) => {
  return (
    <div className={`menu ${isOpen ? 'opened' : ''}`}>
      <ul>
        {entries.map((entry, i) => {
          return <li key={i} className="listItem">{entry}</li>
        })}
      </ul>
    </div>
  )
}

export default Navigation
