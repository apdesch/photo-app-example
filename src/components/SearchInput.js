import React from 'react'

const SearchInput = ({ change, search, placeholder }) => (
  <form onSubmit={search}>
    <input
      className='search'
      placeholder={placeholder}
      onChange={change}
    />
  </form>
)
export default SearchInput
