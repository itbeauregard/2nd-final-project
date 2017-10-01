import React, { Component } from 'react';

const kelvinToFahrenheit = require('kelvin-to-fahrenheit')

class About extends Component {

  constructor(props) {
    super(props)
    this.state = {
      location: '',
      highTemp: 0,
      lowTemp: 0,
      description: '',
      zip: '',
      main: '',
      temp: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.enterZip = this.enterZip.bind(this)
  }

  enterZip(e) {
    let newZip = e.target.value
    this.setState({
      zip: newZip
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    let base = this

    let url = 'http://api.openweathermap.org/data/2.5/weather?zip='
    let weatherApi = `${url}${this.state.zip},us&appid=052f26926ae9784c2d677ca7bc5dec98`
    fetch(weatherApi)
      .then((response) => {
        return response.json()
      }).then((json) => {
          base.setState({
            location: json.name,
            highTemp: kelvinToFahrenheit(json.main.temp_max),
            lowTemp: kelvinToFahrenheit(json.main.temp_min),
            description: json.weather[0].description,
            main: json.weather[0].main,
            temp: kelvinToFahrenheit(json.main.temp)
          });
      }).catch((ex) => {
        console.log('An error occurred while parsing!', ex)
      })
  }

  render() {
    let location = this.state.location;
    let highTemp = this.state.highTemp;
    let lowTemp = this.state.lowTemp;
    let description = this.state.description;
    let temp = this.state.temp;
    return (
      <div>
        <h3>Check it out! I can tell you the weather!</h3>
        <h3>{location}: currently {description} with a high of {highTemp} degrees and a low of {lowTemp} degrees.</h3>
        <form onSubmit={this.handleSubmit}>
          <h3>Please enter your zip code for the weather:
            <input type='text' onChange={this.enterZip} />
            <button type='submit'>Get my forecast!</button></h3>
        </form>
        <div class='weather-vis'>
          <h1>{location}</h1>
          <h4>{description}</h4>
          <h1 class='temp'>{parseInt(temp)}</h1>
          <p>H: {parseInt(highTemp)}    L: {parseInt(lowTemp)}</p>
          <p></p>
        </div>
      </div>
    );
  }
}

export default About;
