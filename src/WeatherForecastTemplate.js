import React from 'react';
import FriendlyDate from './FriendlyDate';

export default function WeatherForecastTemplate(props){
    let date = new Date(props.data.dt * 1000);
    
    function temperature(){
        let temp = Math.round(props.data.main.temp);
        return `${temp}°C`;
    }

    function fahrenheit() {
        let temp = Math.round((props.data.main.temp * 9) / 5 + 32);
        return `${temp}°F`;
      }

    let icon = `/images/${props.data.weather[0].icon}.png`;
  
    if (props.unit === "celsius") {    
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
         )
        } else {
            return (
              <div className="template col">
                <FriendlyDate date = {date} weekDayOnly = {true}/>
                <img src={icon} alt={props.data.weather[0].description} />
                <div className="temp">{fahrenheit()}</div>
              </div>
            );
          }            
}