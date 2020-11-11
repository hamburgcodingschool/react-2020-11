import React from 'react'
import './Avatar.css'

const Avatar = ({img, alt}) => {
  return (
    <div className="avatar">
      <img src={img} alt={alt} />
    </div>
  )
}

export default Avatar
