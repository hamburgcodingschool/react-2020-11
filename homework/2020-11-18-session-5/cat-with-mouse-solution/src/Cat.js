import React, {useEffect, useState} from 'react';
import catImage from './cat.png'

const Cat = (props) => {

  const [extraClassname, setExtraClassname] = useState('');

  useEffect(() => {
    console.log('Cat component mounted');
    setExtraClassname('spin');

    return function cleanup() {
      console.log('Cat component unmounted');
    }
  }, []);

  useEffect(() => {
    console.log('second use effect');
    setExtraClassname('spin');
  }, [props.position]);

  useEffect(() => {
    let timeoutId = null;
    if (extraClassname.length > 0) {
      timeoutId = setTimeout(() => setExtraClassname(''), 5000);
    }

    return () => { // cleanup (works same as in the first useEffect)
      clearTimeout(timeoutId);
    };
  }, [extraClassname]);

  return (
    <img
      src={catImage}
      className={'cat ' + extraClassname}
      alt="cat"
      style={{
        position: 'absolute',
        left: props.position,
        top: props.top || 'unset',
      }}
    />
  );
}

export default Cat;