import React from 'react'
import './Circle.css'

const Circle = ({ color }) => {
  return (
    <div className="circle" style={{ backgroundColor: color }}>
      {color}
    </div>
  )
}

export default Circle
