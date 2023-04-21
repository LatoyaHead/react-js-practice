import React, { useState } from 'react'
import './SearchBar.css'
import { clear } from '@testing-library/user-event/dist/clear'


const products = [
  'tooth paste',
  'tooth brush',
  'mouth wash',
  'dental floss',
  'mouth guard',
]
const SearchBar = () => {

  const [searchValue, setSearchValue] = useState('')

  const handleInputChange = (event) => {
    setSearchValue(event.target.value)
  }

  const handleClearClick = () => {
    setSearchValue('')
  }

  const shouldDisplayButton = searchValue.length > 0

  return (
    <div>
      <input type='text' value={searchValue} onChange={handleInputChange} />
      {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}
      
      <ul>
        {products.map((product) => {
          return <li key={product}>{product}</li>
        })}
      </ul>
      
    </div>
  )
}

export default SearchBar