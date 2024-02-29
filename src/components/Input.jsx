import React from 'react'
import { useWeather } from '../context/Weather'
import Button from './Button'

const Input = () => {
  const weather = useWeather()
  console.log(weather)
  return (
    <div className="input-container">
      <input className='input-field' type="text" placeholder='Search Here' value={weather.searchCity} onChange={(e)=> weather.setSearchCity(e.target.value)}/>
      <Button onClick={weather.fetchData} value="Search"/>
    </div>
  )
}

export default Input
