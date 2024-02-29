import React from 'react'
import './App.css'
import Input from './components/Input'
import Button from './components/Button'
import Card from './components/Card'
import { useWeather } from './context/Weather'

function App() {
  const weather = useWeather()

  return (
    <div className='App'>
      <h1 style={{textAlign:"center", fontSize:"3rem",  marginTop:"8rem", color:"#fff"}}>Weather Forecast</h1>
      <Input/>
      <Card/>
    </div>
  )
}

export default App
