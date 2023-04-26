import React, { useEffect, useState } from "react"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"
import Button from "./Button/Button"


const App = () => {
  const [productState, setProductState] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(productsArray => {
        const newProductsState = productsArray.map((product) => {
          return product.title
        })
        setProductState(newProductsState)
      })
  }, [])

  const hasProducts = productState.length > 0

  return ( 
    <div>
      <Button>hello world</Button>
      <Button>hello world2</Button>
      {hasProducts ? <SearchBar products={productState}/> : 'Loading...'}
      <CountButton incrementBy={1} buttonColor={'lightBlue'} borderRadius={'10px'} />
    </div>
  )
}

export default App