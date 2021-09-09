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
  const [day, cDay] = useState({})
  const [dailyWeather, cDailyWeather] = useState({
    weather: []
  })
 
  const apiClient = new ApiClient();

  const updateDailyWeather = (response) => {
    cDailyWeather({weather : response})
  }
 
  const destructureWeather = (obj, currentObj, hourlyObj)=> {
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
      hourOneDt: hourlyObj[1].dt,
      hourOneTemp: hourlyObj[1].temp,
      hourOneIcon: hourlyObj[1].weather[0].icon,
      hourTwoDt: hourlyObj[2].dt,
      hourTwoTemp: hourlyObj[2].temp,
      hourTwoIcon: hourlyObj[2].weather[0].icon,
      hourThreeDt: hourlyObj[3].dt,
      hourThreeTemp: hourlyObj[3].temp,
      hourThreeIcon: hourlyObj[3].weather[0].icon,
      hourFourDt: hourlyObj[4].dt,
      hourFourTemp: hourlyObj[4].temp,
      hourFourIcon: hourlyObj[4].weather[0].icon,
      hourFiveDt: hourlyObj[5].dt,
      hourFiveTemp: hourlyObj[5].temp,
      hourFiveIcon: hourlyObj[5].weather[0].icon,
      hourSixDt: hourlyObj[6].dt,
      hourSixTemp: hourlyObj[6].temp,
      hourSixIcon: hourlyObj[6].weather[0].icon,
})
}
console.log(day)
  const fetchWeather = () => {
    apiClient
      .getWeather()
      .then((res) => {
        updateDailyWeather(res.data.daily)
        destructureWeather(res.data.daily[0], res.data.current, res.data.hourly)
      })
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
               hourOneDt= {day.hourOneDt}
               hourTwoDt= {day.hourTwoDt}
               hourThreeDt= {day.hourThreeDt}
               hourFourDt= {day.hourFourDt}
               hourFiveDt= {day.hourFiveDt}
               hourSixDt= {day.hourSixDt}
               hourOneTemp= {day.hourOneTemp}
               hourTwoTemp= {day.hourTwoTemp}
               hourThreeTemp= {day.hourThreeTemp}
               hourFourTemp= {day.hourFourTemp}
               hourFiveTemp= {day.hourFiveTemp}
               hourSixTemp= {day.hourSixTemp}
               hourOneIcon= {day.hourOneIcon}
               hourTwoIcon= {day.hourTwoIcon}
               hourThreeIcon= {day.hourThreeIcon}
               hourFourIcon= {day.hourFourIcon}
               hourFiveIcon= {day.hourFiveIcon}
               hourSixIcon= {day.hourSixIcon}
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