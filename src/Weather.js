import React, { useState } from 'react';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';
import { Orbitals } from 'react-spinners-css';
import './Weather.css';

export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState('celsius');
  
  function setData(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(),
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      windSpeed: Math.round(response.data.wind.speed),
      icon: `/images/${response.data.weather[0].icon}.png`
    });
  }

  function search(){
    const apiKey = "554c41227aff1009c4a80ad1aa690508";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(setData);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function changeCity(event){
    setCity(event.target.value);
  }

  function searchLocation(position) {
    const apiKey = "554c41227aff1009c4a80ad1aa690508";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(setData);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  if(weatherData.ready){
    return(
        <div className = 'Weather'>
          <form onSubmit = {handleSubmit}>
            <div className = 'row'>
              <div className = 'col-9'>
                <input 
                  type = 'search' 
                  placeholder = 'Enter a city...' 
                  className = 'form-control' 
                  autoFocus = 'on'
                  onChange = {changeCity} />
              </div>
              <div className = 'col-3'>
                <div className = "btn-group search-buttons" role="group" aria-label="outlined">
                  <button type = 'submit' className="btn btn-info">🔍</button>
                  <button type="button" className="btn btn-warning" onClick = {getCurrentLocation}>📍</button>
                </div>
              </div>    
            </div> 
          </form>
          <WeatherInfo data = {weatherData} unit={unit} setUnit={setUnit} />
          <WeatherForecast city = {weatherData.city} unit={unit}/>
        </div>
    );
  } else {
      search();
      return <Orbitals color = 'rgb(135, 135, 135)'/>;
    }
}