import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('Delhi')
  const [search, setSearch] = useState('Delhi')

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4fcaadfa266466b8f987a55430d07fc7&units=metric`)
    .then(res => res.json())
    .then(data => setWeather(data))
  }, [city])

  return (
    <div className="app">
      <h1>Weather App</h1>
      <div className="search">
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter city"/>
        <button onClick={() => setCity(search)}>Search</button>
      </div>
      {
        weather && (
          <div className="card">
            <h2 className="city">{weather.name}</h2>
            <p className="temp">Temperature: {weather.main.temp}°C</p>
            <p className="condition">Condition: {weather.weather[0].description}</p>
          </div>
        )
      }
    </div>
  )
}

export default App


