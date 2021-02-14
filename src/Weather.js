import React, { useState } from 'react';
import axios from 'axios';
import { Orbitals } from 'react-spinners-css';
import './Weather.css';
import FriendlyDate from './FriendlyDate';

export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ready: false});
  
  function setData(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt*1000),
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      windSpeed: Math.round(response.data.wind.speed),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  if(weatherData.ready){
    return(
        <div className = 'Weather'>
          <form>
            <div className = 'row'>
              <div className = 'col-9'>
                <input 
                  type = 'search' 
                  placeholder = 'Enter a city...' 
                  className = 'form-control' 
                  autoFocus = 'on'/>
              </div>
              <div className = 'col-3'>
                <input 
                  type = 'submit' 
                  value = 'Search' 
                  className = 'btn btn-primary w-100' />
              </div>    
            </div> 
          </form>
          <h1 id = 'city'>{weatherData.city}</h1>
          <ul>
            <li id = 'current_date'>
              <FriendlyDate date = {weatherData.date}/>
            </li>
            <li>Mostly Cloudy</li>
          </ul>
          <div className = 'row mt-3'>
            <div className = 'col-6'>
              <div className = 'clearfix'>
                <img src = {weatherData.icon}
                     alt = {weatherData.description}
                     className = 'float-left' />
                <div className = 'float-left'>    
                  <span id = 'current_temperature'> {weatherData.temperature} </span>
                  <span id = 'unit'>°C</span>
                </div> 
              </div>    
            </div>
           <div className = 'col-6'>
            <ul>
             <li>Precipitation: 15%</li> 
             <li>Humidity: {weatherData.humidity}% </li> 
             <li>Wind Speed: {weatherData.windSpeed} km/h </li> 
            </ul>  
           </div> 
          </div>
        </div>
    );
  } else {
      const apiKey = "554c41227aff1009c4a80ad1aa690508";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(setData);
      return <Orbitals color = 'rgb(135, 135, 135)'/>;
    }
}