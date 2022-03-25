import React from 'react';
import { Link } from 'react-router-dom'


import '../styles/card.css'

export default function Card({
  name,
  main,
  weather,
  id,
  deleteCity
 }) {
  // acá va tu código
  const [weatherInfo] = weather;
  const weatherImage = `http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`;


  const handleDelete = () => {
    deleteCity();
  }
  
  return (
    <div className='card animate__animated animate__rollIn'>

      <div className="button__container">

        <span 
          className="close-card__button btn btn-danger"
          onClick={ handleDelete }
        ><ion-icon name="close-outline"></ion-icon></span>

      </div>
    
    <Link to={`/city/${id}`}>
      <h3 className="city__name">{ name }</h3>
    </Link>

      <div className="temperature__info-container">

        <div className="temperature__info-box">
          <h4>Min</h4>
          <span>{ main.temp_min } °F</span>
        </div>
        <div className="temperature__info-box">
          <h4>Max</h4>
          <span>{ main.temp_max } °F</span>
        </div>
        <div className="temperature__info-icon">
          <img src={ weatherImage } alt="Weather Icon" />
        </div>

      </div>

    </div>
  )
  
};