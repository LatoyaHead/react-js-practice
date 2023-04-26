import React, { useState , useEffect } from 'react'
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

useEffect(() => {
if(currentCount === 10){
  alert("the count is 10")
}

}, [currentCount]) 
useEffect(() => {
if(currentCount === 10){
  alert("the count is 10")
}
}, [currentCount]) 

  return (
    <div style={divStyle}>
      <button style={buttonStyles} onClick={handleClick}>+{props.incrementBy}</button>
      <div className='count-display'>{currentCount}</div>
    </div>
  )
}

export default CountButton