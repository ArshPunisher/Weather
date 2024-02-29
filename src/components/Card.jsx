import React from 'react'
import { useWeather } from '../context/Weather'

const Card = () => {
  const weather = useWeather()
  return (
    <div className='card-container'>
      <h1 style={{textAlign:"center", fontSize:"3rem"}}>{weather?.data?.current?.temp_c}°C - {weather?.data?.current?.temp_f}°F</h1>
      <h3 style={{textAlign:"center", fontSize:"2rem"}}>Feels Like {weather?.data?.current?.feelslike_c}°C - {weather?.data?.current?.feelslike_f}°F</h3>
      <h3 style={{textAlign:"center", fontSize:"2rem"}}>Weather: {weather?.data?.current?.condition?.text}</h3>
      <h3 style={{fontSize:"2rem", marginTop:"1rem"}}>{weather?.data?.location?.name}, {weather?.data?.location?.region}</h3>
      <p style={{fontSize:"1.5rem"}}>Humidity: {weather?.data?.current?.humidity}</p>
      <p style={{fontSize:"1.5rem"}}>Time Zone: {weather?.data?.location?.tz_id}</p>
      <p style={{fontSize:"1.5rem", position:"absolute", bottom:"0", paddingBottom:"1rem"}}>Local Time: {weather?.data?.location?.localtime}</p>
    </div>
  )
}

export default Card
