import React, {useState} from 'react'


const Checkbox = () => {

  // "isChecked" holds the internal and private state of the component
  // "setIsChecked" is a function returned by React's "useState()", which allows us to change (or mutate) the value of "isChecked"

  const [isChecked, setIsChecked] = useState(true)
  const [colors, setColors] = useState(['green', 'blue']);

  const addColor = () => {
    setColors([...colors, 'red'])
  }

  const toggleIsChecked = (event) => {
    const checkboxElement = event.currentTarget
    console.log(checkboxElement.checked)
    setIsChecked(checkboxElement.checked)
  }

  return (
    <div>
      <input type="checkbox"
        checked={isChecked}
        onChange={toggleIsChecked}
      />Checked
      <button onClick={addColor}>add color</button>
    </div>
  )
}

export default Checkbox
