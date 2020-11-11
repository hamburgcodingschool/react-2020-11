import React from 'react'
import './List.css'
import Person from '../person/Person'

const List = ({people}) => {
  return (
    <ul className="list">
      <li className="list-item"><Person person={people[0]}/></li>
      <li className="list-item"><Person person={people[1]}/></li>
      <li className="list-item"><Person person={people[2]}/></li>
      <li className="list-item"><Person person={people[3]}/></li>
    </ul>
  )
}

export default List
