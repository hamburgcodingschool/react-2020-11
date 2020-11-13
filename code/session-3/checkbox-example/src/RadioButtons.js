import React, { useState } from 'react';

const RadioButtons = () => {

  const [selection, setSelection] = useState('1');

  const changeSelect = (event) => {
    // event.target.value -> 1, 2 or 3
    console.log('select Button clicked', event.target.value);
    setSelection(event.target.value);
  }

  console.log('selection is:', selection);

  return (
    <fieldset onChange={changeSelect}>
      <input type="radio" id="one" name="one" value="1" checked={selection === '1'}/>
      <label htmlFor="one"> 1</label>
      <input type="radio" id="two" name="two" value="2" checked={selection === '2'} />
      <label htmlFor="two"> 2</label>
      <input type="radio" id="three" name="three" value="3" checked={selection === '3'} />
      <label htmlFor="three"> 3</label>
    </fieldset>
  );
}

export default RadioButtons;