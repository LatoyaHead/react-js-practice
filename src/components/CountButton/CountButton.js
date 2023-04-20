import React, { useState } from 'react'
import './CountButton.css'


const CountButton = (props) => {

  const [currentCount, setCurrentCount] = useState(0)

  const handleClick = () => {
   setCurrentCount(currentCount + props.incrementBy)
  }
    
const divStyle = {
  color: 'blue',
}

const buttonStyles = {
  background: props.buttonColor,
  borderRadius: props.borderRadius,
}

  return (
    <div style={divStyle}>
      <button style={buttonStyles} onClick={handleClick}>+{props.incrementBy}</button>
      <div className='count-display'>{currentCount}</div>
    </div>
  )
}

export default CountButton