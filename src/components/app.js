import React from "react"
import CountButton from "./CountButton/CountButton"

const App = () => {

  return ( 
    <div>
      <CountButton incrementBy={1} buttonColor={'red'} borderRadius={'10px'} />
      <CountButton incrementBy={5} buttonColor={'lightBlue'} borderRadius={'20px'} />
      <CountButton incrementBy={100} buttonColor={'pink'} borderRadius={'15px'} />
    </div>
  )
}

export default App 