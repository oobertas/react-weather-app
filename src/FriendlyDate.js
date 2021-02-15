import React from 'react';

export default function FriendlyDate(props){
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
    
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

    function addZero(timeUnit){
        return ( timeUnit < 10 ? `0${timeUnit}` : timeUnit);
    }

    let month = months[props.date.getMonth()];
    let day = props.date.getDate();
    let weekDay = days[props.date.getDay()];
    let hours = props.date.getHours();
    let minutes = addZero(props.date.getMinutes());

    return (
    <div>
        {weekDay}, {month} {day} 
        <br />
        {hours}:{minutes}
    </div>);
}