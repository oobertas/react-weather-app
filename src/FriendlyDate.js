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

    function addAmPm(hours, time){
      return ( hours >= 0 && hours < 12 ? `${time}am` : `${time}pm`);
    }

    function convertTo12hrs(hours){
      return (
        hours === 13 ? 1 :
        hours === 14 ? 2 :
        hours === 15 ? 3 :
        hours === 16 ? 4 :
        hours === 17 ? 5 :
        hours === 18 ? 6 :
        hours === 19 ? 7 :
        hours === 20 ? 8 :
        hours === 21 ? 9 :
        hours === 22 ? 10 :
        hours === 23 ? 11 :
        hours === 0 ? 12 :
        hours
      );
    }

    let month = months[props.date.getMonth()];
    let day = props.date.getDate();
    let weekDay = days[props.date.getDay()];
    let hours = props.date.getHours();
    let minutes = addZero(props.date.getMinutes());
    let time = `${addZero(convertTo12hrs(hours))}:${minutes}`

    if (props.weekDayOnly === true){
      return (
        <div>
          <div className = 'weekDayForecast'>
            {weekDay}
          </div> 
          {month} {day} 
        </div>);
    } else {
        return (
          <div>
            {weekDay}, {month} {day} 
            <br />
            {addAmPm(hours,time)}
          </div>);
    }
}