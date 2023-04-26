import React from "react"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"


const App = () => {

  return ( 
    <div>
      <SearchBar 
      const products = {[
        'tooth paste',
        'tooth brush',
        'mouth wash',
        'dental floss',
        'mouth guard',
      ]}/>
      <SearchBar 
      const products = {[
        'bike rake',
        'bike brush',
        'tire pump',
        'soccer ball',
        'bike guard',
      ]}/>
      <CountButton incrementBy={1} buttonColor={'red'} borderRadius={'10px'} />
      <CountButton incrementBy={5} buttonColor={'lightBlue'} borderRadius={'20px'} />
    </div>
  )
}

export default App 