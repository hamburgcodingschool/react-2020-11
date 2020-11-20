import React, {useEffect, useState} from 'react'
import './App.css'
import Cat from './Cat'
import Mouse from './Mouse'

export default function App() {
  console.log('App rendering called');
  // Move the cat by 10 pixels left or right, depending on the the tow buttons
  // click on bottom
  // a state 'position' is used move the cat to the right position.
  const initialPosition = window.innerWidth / 2 - 40

  const [position, setPosition] = useState(initialPosition);

  function moveLeft() {
    setPosition(position - 10);
  }
  function moveRight() {
    setPosition(position + 10);
  }

  const [isCatVisible, setCatVisible] = useState(true);
  function toggleCat() {
    setCatVisible(!isCatVisible);
  }

  const [isMouseVisible, setMouseVisible] = useState(true);

  const [mousePosition, setMousePosition] = useState(initialPosition - 300);

  function moveMouseLeft() {
    setMousePosition(mousePosition - 10);
  }
  function moveMouseRight() {
    setMousePosition(mousePosition + 10);
  }

  const listener = (event) => {
    console.log('keydown', event);
    switch (event.key) {
      case 'ArrowLeft':
        moveLeft();
        break;
      case 'ArrowRight':
        moveRight();
        break;
    }
  }

  // this has bad performance because the event listener
  // gets changed with every render
  useEffect(() => {
    document.addEventListener('keydown', listener)
    console.log('add new event listener');

    return function cleanup() {
      console.log('remove old event listener');
      document.removeEventListener('keydown', listener);
    };
  }, [listener]);

  return (
    <div>
      {isCatVisible && <Cat position={position}/>}
      {isMouseVisible && <Mouse position={mousePosition} />}
      <div className="buttonWrapper">
        <button type="button" onClick={moveLeft}>
          <span role="img" aria-label="move left">
            ↢
          </span>
        </button>
        <button type="button" onClick={moveRight}>
          <span role="img" aria-label="move right">
            ↣
          </span>
        </button>
        <button type="button" onClick={toggleCat}>
          <span role="img" aria-label="move right">
            HIDE/SHOW CAT
          </span>
        </button>
        <button type="button" onClick={moveMouseLeft}>
          <span role="img" aria-label="move Mouse left">
            ↢
          </span>
        </button>
        <button type="button" onClick={moveMouseRight}>
          <span role="img" aria-label="move Mouse right">
            ↣
          </span>
        </button>
      </div>
    </div>
  )
}
