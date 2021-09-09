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
  // const [currentWeather, cCurrentWeather] = useState({
  //   weather: [{temp: 0, icon : ""}]
  // })

  const apiClient = new ApiClient();

  const updateDailyWeather = (response) => {
    cDailyWeather({weather : response})
  }

  const destructureWeather = (obj, currentObj)=> {
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
      currentWeather: currentObj.temp
    })
  }


  // const updateCurrentWeather = (response) => {
  //   cCurrentWeather({
  //     weather: response
  //   })
  // }
  const fetchWeather = () => {
    apiClient
      .getWeather()
      .then((res) => {
        updateDailyWeather(res.data.daily)
        destructureWeather(res.data.daily[0], res.data.current)
        // cDay(res.data.daily[0])
        // updateCurrentWeather(res.data.current)
        // console.log(res.data.daily)
        
      })
  }

  // const buildFirstCard = () => {
  //   // let todayArr = dailyWeather.weather.slice(0, 1)
  //   // let today = todayArr[todayArr.length-1]
  //   // console.log("today", today)
  //   // console.log(currentWeather.weather.temp)
  //   return dailyWeather.weather.slice(0, 1).map((daily, i) => (
  //     <Row key={i}>
  //       <CardGroup>
  //         <ScardFirst currentWeather = {currentWeather.temp} dateString={daily.dt} img={daily.weather[0].icon} alt={daily.weather[0].description} text={daily.weather[0].description} 
  //         max={daily.temp.max} min={daily.temp.min} wind={daily.wind_speed} pressure={daily.pressure} humidity={daily.humidity}/>
  //       </CardGroup>
  //     </Row>
  //   ))
  // }

  // state = [weather, cWeather] = [1,2,3,4]
  //state2 = [weather2, cw2] = {key : undefined}
  // weather.map(() => console.log(weather2.key[0])) //error

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
              currentWeather ={day.currentWeather}/>
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