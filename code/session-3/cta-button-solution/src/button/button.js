import React from 'react'
import style from './button.module.css'

/**
 *
 * @param {*} type The conversation type of button (confirm, cancel, abort)
 * @param {*} disabled
 * @param {*} title The button title
 */
const Button = ({type, disabled, children}) => {
  return (
  <button
    type="button"
    className={[style.button, style[type]].join(' ')}
    disabled={disabled}>
    {children}
  </button>
  )
}

export default Button
