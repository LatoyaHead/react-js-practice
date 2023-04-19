import React from "react"

const App = () => {
  const myItem = 'toya'

  return ( 
    <ul>
      <li>item1</li>
      <li>item225 {myItem}</li>
      <li>{myItem.toUpperCase()}</li>
    </ul>
  )
}

export default App 