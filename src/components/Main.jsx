import React from 'react';

import SearchBar from './SearchBar';
import Cards from './Cards';

import weatherImage from '../assets/weather-image.svg'

import '../styles/main.css';


function Main({
  inputValue,
  setInputValue,
  getData,
  cities,
  deleteCity
}) {
 

  return (
  <div>

    <div className="main">

      <SearchBar 
            inputValue = { inputValue }
            setInputValue = { setInputValue }
            getData = { getData }
        />

      <hr />

      <div>
        {cities.length !== 0 ? <Cards
          cities={ cities }
          deleteCity = { deleteCity }
        />
      :
      <div>
        <p className='weather__loader-text'>Search for a city weather!</p>
        <div className="weather__image">
          <img src={weatherImage} alt="weather" />
        </div>
      </div>
      }
      </div>

      <hr />

    </div>
  </div>
  );
}

export default Main;
