import React, { useEffect, useState } from 'react';
import Scard from './scard';
import ScardFirst from './scardFirst';
import HourlyCard from './hourlyCard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import { ApiClient } from './ApiClient'

function App() {
  const [day, cDay] = useState({})
  const [dailyWeather, cDailyWeather] = useState({
    weather: []
  })
  const [hourlyWeather, cHourlyWeather] = useState({
    weather: []
  })
 
  const apiClient = new ApiClient();

  const updateDailyWeather = (response) => {
    cDailyWeather({weather : response})
  }

  const updateHourlyWeather = (response) => {
    cHourlyWeather({weather : response})
  }

  const destructureWeather = (obj, currentObj, hourlyObj) => {
    cDay({
      dateString: obj.dt,     
      img: obj.weather[0].icon, 
      alt:obj.weather[0].description, 
      text: obj.weather[0].description, 
      max: obj.temp.max, 
      min: obj.temp.min,
      wind_speed: obj.wind_speed,
      pressure: obj.pressure,
      humidity: obj.humidity,
      currentWeather: currentObj.temp,
    })
  }

  const fetchWeather = () => {
    apiClient
      .getWeather()
      .then((res) => {
        updateDailyWeather(res.data.daily)
        updateHourlyWeather(res.data.hourly.slice(1,7))
        destructureWeather(res.data.daily[0], res.data.current, res.data.hourly)
      })
  }
console.log(hourlyWeather)
  const buildHourlyWeather = () => {
    return hourlyWeather.weather.map((current,i) => (
      <HourlyCard
      dateString={current.dt} 
      icon={current.weather[0].icon} 
      alt={current.weather[0].description} 
      temp={current.temp} />    
    ))
  }

  const buildCards = () => {
    return dailyWeather.weather.slice(1, 7).map((current, i) => (
      <Row key={i}>
        <CardGroup>
          <Scard 
          dateString={current.dt} 
          img={current.weather[0].icon} 
          alt={current.weather[0].description} 
          text={current.weather[0].description} 
          max={current.temp.max} 
          min={current.temp.min}
          wind={current.wind_speed} />
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
        <Row>
            <CardGroup>
              <ScardFirst 
               dateString={day.dateString} 
               img={day.img} 
               alt={day.alt} 
               text={day.text} 
               max={day.max} 
               min={day.min}
               wind={day.wind_speed}
               humidity={day.humidity}
               pressure={day.pressure}
               currentWeather ={day.currentWeather}
               buildHourlyWeather = {buildHourlyWeather()}
               />
            </CardGroup>
          </Row>
          {buildCards()}
        </Card.Body>
      </Card>
    </Row>
    </>
  );
}

export default App;