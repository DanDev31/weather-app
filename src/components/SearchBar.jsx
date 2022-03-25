import React from 'react';

import '../styles/searchBar.css'

export default function SearchBar({ inputValue, setInputValue, getData }) {
  // acá va tu código
 

  const handleInputChange = ({ target }) => {

    setInputValue(target.value)

  }

  const handleSubmit = (e) => {

    e.preventDefault();
    setInputValue('')
  }

  const handleOnSearch = () => {
    getData();
  }

  return (
  <form 
    className='search__bar'
    onSubmit={ handleSubmit }
  >
    <input 
      type="text" 
      className="search__bar-input" 
      placeholder='City...'
      value={ inputValue }
      onChange={ handleInputChange }
    />
    <button 
      className="search__bar-button btn btn-success"
      onClick={ handleOnSearch }
    >Search</button>
  </form>
  )
};