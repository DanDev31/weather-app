import React from 'react'
import { useParams, Navigate } from 'react-router-dom'


import '../styles/cardInfo.css'

export default function City({cities}) {

  const { cityId } = useParams()
console.log(cityId)
console.log(cities)


 const city = cities.find(city => city.id === Number(cityId) )
  console.log(city)

  if(!city) {
    return <Navigate to='/' />
  }

  const {name, main:{ humidity, pressure, temp, temp_max, temp_min }, coord:{ lat, lon }, weather} = city;
  const [weatherInfo] = weather;
  const weatherImage = `http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`;

  return (
    <div className='card__info'>
      <h3 className="card__info-title">{ name }</h3>
      <div className="card__info-container">
        <div className="card__info-text">
          <p><b>Temperature: </b>{ temp } °F</p>
          <p><b>Max temperature: </b>{ temp_max } °F</p>
          <p><b>Min temperature: </b>{ temp_min } °F</p>
          <p><b>Humidity: </b>{ humidity } g/m3</p>
          <p><b>Pressure: </b>{ pressure } kPa</p>
          <p><b>Latitude: </b>{ lat }°</p>
          <p><b>Longitude: </b>{ lon }°</p>
        </div>

        <div className="card__info-image">
          <div className="card__info-image-container">
            <img src={ weatherImage } alt="Weather icon" />
          </div>
          <p><b>Current weather: </b>{ weatherInfo.description }</p>
        </div>
      </div>
    </div>
  )
}



