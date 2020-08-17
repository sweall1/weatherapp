import React from 'react';
import './Result.css'



const Result = props => {
    //destrukturyzacja
    const {err, date, city, sunrise, sunset, temp, pressure, wind} = props.weather
   
   let content = null;
   if(!err && city) {

const sunriseTime = new Date (sunrise*1000).toLocaleTimeString()
const sunsetTime = new Date (sunset*1000).toLocaleTimeString()
    
       content = (
         <>
              <h3> Wyniki dla <strong> {city} </strong></h3>
              <h4>Dane z dnia i godziny: {date} </h4>
              <h4>Temperatura: {temp} &#176;C </h4>
              <h4>Wschód Słońca dzisiaj o: {sunriseTime}</h4>
              <h4>Zachód Słońca dzisiaj o: {sunsetTime}</h4>
              <h4>Siła wiatru: {wind} m/s</h4>
              <h4>Ciśnienie: {pressure} hPa</h4>
           </> 
       )
   }

    return (
  <div className="result">
      {err ? `Miasta ${city} nie ma w bazie` : content}
  </div>
    );
}

export default Result;