import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './App.css';

function HourlyCard(props) {
    const getIcon = (icon) => {
        return `http://openweathermap.org/img/wn/${icon}@2x.png`
    }

    const getHour = (datestring) => {
    const hours = ["12AM","1AM","2AM","3AM","4AM","5AM","6AM","7AM","8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM","10PM","11PM"]
        let hour = new Date(parseInt(datestring) * 1000)
        return hours[hour.getHours()]
    }

    const hour = getHour(props.dateString)
    const icon = getIcon(props.icon)
 
  
  return (
    <>
    <Col>
        <Row className = "hourly-temp">{Math.round(props.temp)}{"°"}</Row>
        <Row><Image src={icon} alt={props.alt}/></Row>
        <Row className = "hourly-time">{hour}</Row>
    </Col>         
    </>
  );
}

export default HourlyCard;