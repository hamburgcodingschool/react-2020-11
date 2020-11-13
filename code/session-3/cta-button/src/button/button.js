import React from 'react'
import './button.css'

/**
 *
 * @param {*} type The conversation type of button (confirm, cancel, abort)
 * @param {*} disabled
 * @param {*} title The button title
 */
const Button = ({type, disabled, title }) => {
  return (
  <button type="button" className="button">Button Title</button>
  )
}

export default Button
