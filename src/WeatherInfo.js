import React from 'react';
import FriendlyDate from './FriendlyDate';
import WeatherTemperature from './WeatherTemperature';

export default function WeatherInfo(props){

    let celsiusTemperature = props.data.temperature;
    let girlClothes = celsiusTemperature <= 0 ? 'freeze' 
        : celsiusTemperature > 0 && celsiusTemperature < 15 ? 'cold' 
        : celsiusTemperature >= 15 && celsiusTemperature < 23 ? 'warm' 
        : celsiusTemperature >= 23 ? 'hot' : 'warm';
    let girlImage = `/images/${girlClothes}.png`;

    return ( 
        <div className = 'WeatherInfo'>
            <h1 id = 'city'>{props.data.city}</h1>
                <ul>
                    <li id = 'current_date'>
                        <FriendlyDate date = {props.data.date} />
                    </li>
                    <li>{props.data.description}</li>
                </ul>
            <div className = 'row mt-3'>
                <div className = 'col-6'>
                    <div className = 'clearfix'>
                        <img src = {props.data.icon}
                             alt = {props.data.description}
                             className = 'float-left' />
                            <div className = 'float-left'>    
                                <WeatherTemperature celsius = {celsiusTemperature} forecastTemperature = {props.forecastTemperature} />
                            </div> 
                    </div>    
                </div>
                <div className = 'row'>
                    <div className = 'col'>
                        <ul>
                            <li>Humidity: {props.data.humidity}% </li> 
                            <li>Wind Speed: {props.data.windSpeed} km/h </li> 
                        </ul>
                    </div> 
                    <img src = {girlImage} alt = 'girl picture'></img>
                </div> 
            </div >
        </div>
    );
}