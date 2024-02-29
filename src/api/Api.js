const BASE_URL = "https://api.weatherapi.com/v1/current.json?key=21cd2686c9034a4b87081753242802"

export const getWeatherData = async (city)=>{
  const response = await fetch(`${BASE_URL}&q=${city}&aqi=yes`)
  return response.json()
}