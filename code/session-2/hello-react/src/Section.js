import React from 'react';

function Section(props) {
  console.log(props);
  return (
    <div className="section">
      <h1>{props.heading}</h1>
      <p>{props.children}</p>
    </div>
  )
}

export default Section;