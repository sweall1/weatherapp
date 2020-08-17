import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

//API klucz
const APIkey = '5a0d50c8157f3e4a5e7925197ebd915d'

class App extends Component {
 
  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: false,
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  }
 /* handleCitySubmit = e => {
    e.preventDefault()*/
    

  componentDidMount(){
    console.log("zamontowanya");
  }
  componentDidUpdate(prevProps, prevState){
   // console.log("poprzednia wartość " + prevState.value);
    // console.log("aktualna wartość " + this.state.value);
    if (this.state.value.lenght=== 0) return
    if(prevState.value !== this.state.value) {
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIkey}&units=metric`;
  
      fetch(API)
      .then(response => {
        if(response.ok){
          return response
        }
        throw Error("Nie udało się")
        })
        .then(response => response.json())
        .then(data => {
          const time = new Date().toLocaleString()
          this.setState(state => ({
            err: false,
            date: time,
            city: state.value,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
          }))
        })
        .catch(err=> {
          console.log(err);
          this.setState(prevState=> {
            return{
            err: true,
            city: prevState.value
          }})
        })
  
    
    }
  }
 
  render(){
  return (
    <div className="App">
 <Form value={this.state.value}
 change={this.handleInputChange}
 />
 <Result  weather={this.state}/>
    </div>
  );
}
}

export default App;
