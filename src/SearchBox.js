import React from 'react'

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div className='tc'>
        <input type='text' placeholder='Search Robots' onChange={searchChange}></input>
    </div>
  )
}

export default SearchBox;