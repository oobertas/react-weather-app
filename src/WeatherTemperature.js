import React, {useState} from 'react';

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState('celsius');

    function showFahrenheit(event){
        event.preventDefault();
        setUnit('fahrenheit');
    }

    function showCelsius(event){
        event.preventDefault();
        setUnit('celsius');
    }

    if (unit === 'celsius'){
        return(
        <div className = 'weatherTemperature'>
            <span id = 'current_temperature'> 
            {props.celsius} 
            </span>
            <span id = 'unit'>°C | <a href = '/' className = 'unit-link' onClick = {showFahrenheit}>°F</a></span>
        </div>
        );
    } else {
        let fahrenheit = (props.celsius*9/5)+32;
        return(
            <div className = 'weatherTemperature'>
                <span id = 'current_temperature'> 
                {Math.round(fahrenheit)} 
                </span>
                <span id = 'unit'><a href = '/' className = 'unit-link' onClick = {showCelsius}>°C</a> | °F</span>
            </div>);
    }
    
}