import React from 'react'
import './Person.css'
import Avatar from '../avatar/Avatar'

const Person = ({person}) => {
  return (
    <section className="person">
      <div className="person-wrapper">
        <Avatar img={person.image} alt={person.name} />
        <div className="person-header">
          <h4 className="person-name">{person.name}</h4>
          <h5 className="person-role">{person.role}</h5>
        </div>
      </div>
      <p>{person.profile}</p>
      <p style={{ fontStyle: "oblique" }}>more...</p>
    </section>
  )
}

export default Person
