import React, {Component} from 'react';
import './WeatherApp.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Card} from 'react-bootstrap';
import Search from './Search';
import Navigation from './Navigation';

export default function WeatherApp(){
    return(
        <div>
            <Card className="mb-3 main-weather-card">
                <Card.Body>
                    <Navigation/>
                    <Search/>
                    <h1>city name, time and day, description</h1>
                    <h1>weather emoji | precipitation and wind go here</h1>
                    <h1>Forecast goes here</h1>
                </Card.Body>
            </Card>
            <p><a href="https://github.com/FatemehIzadi/weatherAppReact">open-source code</a> by <a href="mailto:izadifatemeh77@gmail.com">Fatemeh Izadi</a></p>
        </div>
    );
}