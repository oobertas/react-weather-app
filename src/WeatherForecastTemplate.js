import React from 'react';
import FriendlyDate from './FriendlyDate';

export default function WeatherForecastTemplate(props){
    function hours() {
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours();
        return `${hours}:00`;
    }
    
    function temperature(){
        let temp = Math.round(props.data.main.temp);
        return `${temp}°C`;
    }

    let icon = `/images/${props.data.weather[0].icon}.png`;
    
  return (  
    <div className = 'template col'>
        {hours()}
        <img src = {icon}
             alt = {props.data.weather[0].description}
        />
        <div className = 'temp'>
            {temperature()}
        </div>
    </div>
         );
       
}