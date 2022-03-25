import React from 'react'; 
import Card from '../components/Card.jsx';

import '../styles/cards.css'

export default function Cards(props) {
    
  const { cities, deleteCity } = props
  return (
    <div className='cards__list'>
      {
        cities.map((city, i) => (
          
          <Card
            key={ i }
            deleteCity = { () => deleteCity(city) }
            { ...city }
        />
  ))    
      }
    </div>
  )
};