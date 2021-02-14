import React from 'react';
import './Weather.css';

export default function Weather(){
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
          <h1 id = 'city'>New York</h1>
          <ul>
            <li id = 'current_date'>Sunday 3:30pm</li>
            <li>Mostly Cloudy</li>
          </ul>
          <div className = 'row mt-3'>
            <div className = 'col-6'>
              <div className = 'clearfix'>
                <img src = './weather_icons/svg/001-sunny.svg'
                     alt = 'sunny icon'
                     className = 'float-left' />
                <div className = 'float-left'>    
                  <span id = 'current_temperature'> 6 </span>
                  <span id = 'unit'>°C</span>
                </div> 
              </div>    
            </div>
           <div className = 'col-6'>
            <ul>
             <li>Precipitation: 15%</li> 
             <li>Humidity: 15% </li> 
             <li>Wind Speed: 15 km/h </li> 
            </ul>  
           </div> 
          </div>
        </div>
    )
}