import React, { useState } from 'react';
import axios from 'axios';
import WeatherForecastTemplate from './WeatherForecastTemplate';
import { Orbitals } from 'react-spinners-css';
import './WeatherForecast.css';

export default function WeatherForecast(props){
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleForecastResponse(response){
        setForecast(response.data);
        setLoaded(true);
    }

    if (loaded && props.city === forecast.city.name) {
        return (
            <div className = 'weatherForecast row'>
                <WeatherForecastTemplate data = {forecast.list[7]} />
                <WeatherForecastTemplate data = {forecast.list[13]} />
                <WeatherForecastTemplate data = {forecast.list[21]} />
                <WeatherForecastTemplate data = {forecast.list[29]} />
                <WeatherForecastTemplate data = {forecast.list[37]} />
            </div> 
        );
    } else {
        const apiKey = "554c41227aff1009c4a80ad1aa690508";
        let apiUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleForecastResponse); 
        return <Orbitals color = 'rgb(135, 135, 135)'/>;
    } 
}