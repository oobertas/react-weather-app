import React from 'react';
import FriendlyDate from './FriendlyDate';

export default function WeatherForecastTemplate(props){
    let date = new Date(props.data.dt * 1000);
    
    function temperature(){
        let temp = Math.round(props.data.main.temp);
        return `${temp}°C`;
    }

    let icon = `/images/${props.data.weather[0].icon}.png`;
    
  return (  
    <div className = 'template col'>
        <div className = 'forecastDate'>
            <FriendlyDate date = {date} weekDayOnly = {true}/>
        </div>
        <img src = {icon}
             alt = {props.data.weather[0].description}
        />
        <div className = 'temp'>
            {temperature()}
        </div>
    </div>
         );
       
}