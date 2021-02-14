import React from 'react';
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className='App'>
      <div className = 'container'>
      <Weather defaultCity = 'Tokyo'/>
      <footer>
        This project was coded by {" "}
        <a href = 'https://www.linkedin.com/in/olha-obertas-77932b15b/'
           target = '_blank'>
           Olha Obertas
        </a>
           {" "}and is{" "} 
        <a href = 'https://github.com/oobertas/react-weather-app'
         target = '_blank'>
        open-sourced on GitHub
        </a>
      <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </footer>
    </div>
    </div>
  );
}


