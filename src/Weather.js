import React, { useState } from 'react';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import { Orbitals } from 'react-spinners-css';
import './Weather.css';

export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  
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
                <input 
                  type = 'submit' 
                  value = 'Search' 
                  className = 'btn btn-primary w-100' />
              </div>    
            </div> 
          </form>
          <WeatherInfo data = {weatherData}/>
        </div>
    );
  } else {
      search();
      return <Orbitals color = 'rgb(135, 135, 135)'/>;
    }
}