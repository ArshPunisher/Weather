import React, { useContext } from 'react'
import { getWeatherData } from "../api/Api";
import { createContext, useState } from "react";
const WeatherContext = new createContext()

export const useWeather=()=>{
  return useContext(WeatherContext)
}

const WeatherProvider = (props) => {
  const [data, setData] = useState(null)
  const [searchCity, setSearchCity] = useState(null)

  const fetchData = async () =>{
    const response = await getWeatherData(searchCity)
    setData(response)
  }
  return (
    <div>
      <WeatherContext.Provider value={{data,setSearchCity, searchCity, fetchData}}>
        {props.children}
      </WeatherContext.Provider>
    </div>
  )
}

export default WeatherProvider
