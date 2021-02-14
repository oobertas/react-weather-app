import React, { useState } from 'react';

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

    function addZero(timeUnit){
        return ( timeUnit < 10 ? `0${timeUnit}` : timeUnit);
    }

    let year = props.date.getFullYear();
    let month = props.date.getMonth();
    let day = props.date.getDate();
    let weekDay = days[props.date.getDay()];
    let hours = addZero(props.date.getHours());
    let minutes = addZero(props.date.getMinutes());

    return (
    <div>
        {weekDay} {hours}:{minutes}
    </div>);
}