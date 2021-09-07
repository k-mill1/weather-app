import React, { useEffect, useState } from 'react';
import Scard from './scard';
import ScardFirst from './scardFirst';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import { ApiClient } from './ApiClient'

function App() {
  const [weather, cWeather] = useState({
    weather: []
  })

  const apiClient = new ApiClient();

  const updateWeather = (response) => {
    cWeather({
      weather: response
    })
  }

  const fetchWeather = () => {
    apiClient
      .getWeather()
      .then((res) => {
        updateWeather(res.data.daily)
        console.log(weather.weather.slice(0, 5))
      })
  }

  const buildFirstCard = () => {
    return weather.weather.slice(0, 1).map((current, i) => (
      <Row key={i}>
        <CardGroup>
          <ScardFirst dateString={current.dt} img={current.weather[0].icon} alt={current.weather[0].description} text={current.weather[0].description} 
          max={current.temp.max} min={current.temp.min} wind={current.wind_speed} pressure={current.pressure} humidity={current.humidity}/>
        </CardGroup>
      </Row>
    ))
  }

  const buildCards = () => {
    return weather.weather.slice(1, 7).map((current, i) => (
      <Row key={i}>
        <CardGroup>
          <Scard dateString={current.dt} img={current.weather[0].icon} alt={current.weather[0].description} text={current.weather[0].description} 
          max={current.temp.max} min={current.temp.min} wind={current.wind_speed} />
        </CardGroup>
      </Row>
    ))
  }
  
  useEffect(() => {
    fetchWeather()
  }, [])
  
  return (
    <>
    <Row className="justify-content-center">
      <Card style={{maxWidth: '30rem'}}>
      <Card.Header>7-day weather forecast</Card.Header>
        <Card.Body>
          {buildFirstCard()}
          {buildCards()}
        </Card.Body>
      </Card>
    </Row>
    </>
  );
}

export default App;