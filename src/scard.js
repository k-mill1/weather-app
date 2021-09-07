import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './App.css';

function Scard(props) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const day = new Date(parseInt(props.dateString) * 1000);
  const nameDay = days[day.getDay()]
  const month = months[day.getMonth()]
  const date = day.getDate()
  const image = `http://openweathermap.org/img/wn/${props.img}@2x.png`
  const maxTemp = Math.round(props.max)
  const minTemp = Math.round(props.min)
  const windSpeed = Math.round(props.wind)

  return (
    <>
        <Card>
          <Card.Body className = "scard">
            <Row>
              <Col className = "date-container" xs = {2}>
                <div>
                  <Row className="justify-content-center day" >{nameDay}</Row>
                  <Row className="justify-content-center date" >{date}{" "}{month}</Row>
                </div>
              </Col>
              <Col className = "weather-image" xs = {3}>
                <Image src={image} alt={props.alt} />
              </Col>  
              <Col className = "temp-container">
                <div>
                  <Row className = "temp">{maxTemp}{"/"}{minTemp}{"°C"}</Row>
                  <Row>{"Forecast: "}{props.text}</Row>
                  <Row>{"Wind: "}{windSpeed}{" km/h"}</Row>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card> 
    </>
  );
}

export default Scard;