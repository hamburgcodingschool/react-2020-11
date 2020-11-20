import React from 'react';
import mouseImage from './mouse.png'

const Mouse = (props) => {

  return (
    <img
      src={mouseImage}
      className={'mouse'}
      alt="mouse"
      style={{
        position: 'absolute',
        left: props.position,
        top: props.top || 'unset',
      }}
    />
  );
}

export default Mouse;