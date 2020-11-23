import React, { useState } from 'react'
import './Navigation.css'

const Navigation = ({ entries }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
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
