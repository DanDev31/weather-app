import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import Main from './components/Main'
import  Navbar  from './components/Navbar';
import About from './components/About'
import City from './components/City';


import { API_KEY } from './helpers/api';



const App = () => {


  const [inputValue, setInputValue] = useState('')
  const [cities, setCities] = useState([])
  // const [loading, setLoading] = useState(null)
  // const [error, setError] = useState(false)

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}`


  //FETCH WEATHER API

  const getData = async () => {

    const response = await fetch(url)
    const weatherData = await response.json()
    if(weatherData.cod === 200) {
      setCities(oldCities => [...oldCities, weatherData])
    } else {
      setCities(oldCities => [...oldCities])
    }
}



  //DELETE CITY

  const deleteCity = (item) => {

    const deletedCity = cities.filter(city => city.id !== item.id)
    setCities(deletedCity);

  }


  return (
      <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Main 

              inputValue = { inputValue }
              setInputValue = { setInputValue }
              cities={ cities }
              getData = { getData }
              deleteCity = { deleteCity }

            />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/city/:cityId" element={<City cities = { cities } />}/>
        </Routes>
      </>
   
  )
}

export default App;
