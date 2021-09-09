import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './App.css';

function ScardFirst(props) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const day = new Date(parseInt(props.dateString) * 1000);
    const nameDay = days[day.getDay()]
    const month = months[day.getMonth()]
    const date = day.getDate()
    const image = `http://openweathermap.org/img/wn/${props.img}@2x.png`
    const maxTemp = Math.round(props.max)
    const minTemp = Math.round(props.min)
    const windSpeed = Math.round(props.wind)
    const currentTemp = Math.round(props.currentWeather)
    const currentTime = new Date(parseInt(props.currentTime) * 1000);
    const hour = currentTime.getHours() 
    const minute = ('0'+currentTime.getMinutes()).slice(-2) 
    
    return (
    <>
        <Card>
            <Card.Body className = "scardFirst">
            <Row>
                <Col className = "city-container ">
                    <div>
                        <Row className = "justify-content-center city">{"Sheffield, UK"}</Row>
                        <Row className="justify-content-center">{nameDay}{" "}{date}{" "}{month}</Row>
                        <Row className="justify-content-center">{hour}{":"}{minute}</Row>
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
                {props.buildHourlyWeather}
            </Row>
            </Card.Body>
        </Card>
    </>
    );
}

export default ScardFirst;