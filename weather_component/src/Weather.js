import {Card} from "antd";
import React from "react";
import 'antd/dist/antd.css';

const Weather = () => {

const weatherData = {
    coord: {
        lon: 10.7461,
        lat: 59.9127
    },
    weather: [
        {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n"
        }
    ],
    base: "stations",
    main: {
        temp: 271.82,
        feels_like: 271.82,
        temp_min: 271.48,
        temp_max: 272.59,
        pressure: 1006,
        humidity: 1
    },
    visibility: 10000,
    wind: {
        speed: 0.94,
        deg: 335,
        gust: 0.86
    },
    clouds: {
        all: 81
    },
    dt: 1618358714,
    sys: {
        type: 3,
        id: 2007693,
        country: "NO",
        sunrise: 1618372984,
        sunset: 1618425062
    },
    timezone: 7200,
    id: 3143244,
    name: "Oslo",
    cod: 200
}
    return(
        <>
            <h1> hello ole </h1>
}
            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>City: {weatherData.name}</p>
                <p>Temp: {weatherData.main.temp}</p>
                <p>Hum: {weatherData.main.humidity}</p>
                <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-GB")}</p>
                <p>Sunrise: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-GB")}</p>

            </Card>
        </>
    )}

export default Weather;



/*
* Display sunset tiden også X
* Rett bak tempraturen skal du legge til om det er farenheit eller celcius
* Legg til weatherData.weather.main med tittel
* Google toLocaleTimeString() og finn ut om du kan gjøre det om til en dato og ikke klokkeslett
* */