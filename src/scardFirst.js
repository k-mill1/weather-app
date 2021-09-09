import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './App.css';

function ScardFirst(props) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const hours = ["12AM","1AM","2AM","3AM","4AM","5AM","6AM","7AM","8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM","10PM","11PM"]
  const day = new Date(parseInt(props.dateString) * 1000);
  const nameDay = days[day.getDay()]
  const month = months[day.getMonth()]
  const date = day.getDate()
  const image = `http://openweathermap.org/img/wn/${props.img}@2x.png`
  const maxTemp = Math.round(props.max)
  const minTemp = Math.round(props.min)
  const windSpeed = Math.round(props.wind)
  const currentTemp = Math.round(props.currentWeather)
  const hourOne = new Date(parseInt(props.hourOneDt) * 1000);
  const hourOneTime = hours[hourOne.getHours()]
  const hourTwo = new Date(parseInt(props.hourTwoDt) * 1000);
  const hourTwoTime = hours[hourTwo.getHours()]
  const hourThree = new Date(parseInt(props.hourThreeDt) * 1000);
  const hourThreeTime = hours[hourThree.getHours()]
  const hourFour = new Date(parseInt(props.hourFourDt) * 1000);
  const hourFourTime = hours[hourFour.getHours()]
  const hourFive = new Date(parseInt(props.hourFiveDt) * 1000);
  const hourFiveTime = hours[hourFive.getHours()]
  const hourSix = new Date(parseInt(props.hourSixDt) * 1000);
  const hourSixTime = hours[hourSix.getHours()]
  const hourOneIcon = `http://openweathermap.org/img/wn/${props.hourOneIcon}@2x.png`
  const hourTwoIcon = `http://openweathermap.org/img/wn/${props.hourTwoIcon}@2x.png`
  const hourThreeIcon = `http://openweathermap.org/img/wn/${props.hourThreeIcon}@2x.png`
  const hourFourIcon = `http://openweathermap.org/img/wn/${props.hourFourIcon}@2x.png`
  const hourFiveIcon = `http://openweathermap.org/img/wn/${props.hourFiveIcon}@2x.png`
  const hourSixIcon = `http://openweathermap.org/img/wn/${props.hourSixIcon}@2x.png`
console.log(props.hourOneIcon)
  return (
    <>
     
        <Card>
          <Card.Body className = "scardFirst">
            <Row>
                <Col className = "city-container ">
                    <div>
                        <Row className = "justify-content-center city">{"Sheffield, UK"}</Row>
                        <Row className="justify-content-center">{nameDay}{" "}{date}{" "}{month}</Row>
                        <Row className="justify-content-center"><Image className = "icon-size" src={image} alt={props.alt} /></Row>
                        <Row className="justify-content-center icon-text">{props.text}</Row>
                    </div>
                </Col>
                <Col>
                    <div>
                        <Row className = "large-temp">{currentTemp}{"°C"}</Row>
                        <Row className = "max-min">{"H: "}{maxTemp}{"° "}{"L: "}{minTemp}{"°"}</Row>
                        <Row>
                            <Col xs = {5}>
                                <Row>{"Wind "}</Row>
                                <Row>{"Humidity "}</Row>
                                <Row>{"Pressure "}</Row>
                            </Col>
                            <Col>
                                <Row>{windSpeed}{" km/h"}</Row>
                                <Row>{props.humidity}{" %"}</Row>
                                <Row>{props.pressure}{" hPa"}</Row>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <hr className = "white-line" />
            <Row>
                <Col>
                    <Row className = "hourly-temp">{Math.round(props.hourOneTemp)}{"°"}</Row>
                    <Row><Image src={hourOneIcon}/></Row>
                    <Row className = "hourly-time">{hourOneTime}</Row>
                </Col>
                <Col>
                    <Row className = "hourly-temp">{Math.round(props.hourTwoTemp)}{"°"}</Row>
                    <Row><Image src={hourTwoIcon}/></Row>
                    <Row className = "hourly-time">{hourTwoTime}</Row>
                </Col>
                <Col>
                    <Row className = "hourly-temp">{Math.round(props.hourThreeTemp)}{"°"}</Row>
                    <Row><Image src={hourThreeIcon}/></Row>
                    <Row className = "hourly-time">{hourThreeTime}</Row>
                </Col>
                <Col>
                    <Row className = "hourly-temp">{Math.round(props.hourFourTemp)}{"°"}</Row>
                    <Row><Image src={hourFourIcon}/></Row>
                    <Row className = "hourly-time">{hourFourTime}</Row>
                </Col>
                <Col>
                    <Row className = "hourly-temp">{Math.round(props.hourFiveTemp)}{"°"}</Row>
                    <Row><Image src={hourFiveIcon}/></Row>
                    <Row className = "hourly-time">{hourFiveTime}</Row>
                </Col>
                <Col>
                    <Row className = "hourly-temp">{Math.round(props.hourSixTemp)}{"°"}</Row>
                    <Row><Image src={hourSixIcon}/></Row>
                    <Row className = "hourly-time">{hourSixTime}</Row>
                </Col>

            </Row>
          </Card.Body>
        </Card>
    </>
  );
}

export default ScardFirst;