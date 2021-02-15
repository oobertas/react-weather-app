import React from 'react';
import FriendlyDate from './FriendlyDate';

export default function WeatherInfo(props){
    return ( 
        <div className = 'WeatherInfo'>
            <h1 id = 'city'>{props.data.city}</h1>
                <ul>
                    <li id = 'current_date'>
                        <FriendlyDate date = {props.data.date}/>
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
                                <span id = 'current_temperature'> {props.data.temperature} </span>
                                <span id = 'unit'>°C</span>
                            </div> 
                        </div>    
                    </div>
                    <div className = 'col-6'>
                    <ul>
                        <li>Humidity: {props.data.humidity}% </li> 
                        <li>Wind Speed: {props.data.windSpeed} km/h </li> 
                    </ul>  
                    </div> 
            </div >
        </div>
    );
}