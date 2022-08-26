import React, {useCallback, useEffect, useState} from 'react';
import styled from "styled-components";

const Weather = ({city}) => {
    const [weatherData, setWeatherData] = useState({});

    const fetchData = useCallback(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eabbdd64dec38ae789100e459c50dc68&units=metric`
        )
            .then((res) => res.json())
            .then((data) => {

                setWeatherData(data);

            })
            .catch((err) => console.error(err));
    }, [city]);


    useEffect(() => {
        fetchData()
    }, [fetchData])


    let temperature,
        feelsLike,
        weatherDescription;


    weatherData.main?.temp ? temperature = weatherData.main.temp.toFixed(0) : temperature = '...loading';
    weatherData.main?.feels_like ? feelsLike = weatherData.main.feels_like.toFixed(0) : feelsLike = '...loading';
    Object.keys(weatherData).length !== 0 ? weatherDescription = weatherData.weather[0].description : weatherDescription = '...loading';

    return (
        <WeatherWrap>
            <WeatherText>{temperature}°C</WeatherText>
            <WeatherText>Feels like {feelsLike}°C</WeatherText>
            <WeatherText>{weatherDescription}</WeatherText>
        </WeatherWrap>
    );
};

export default Weather;


const WeatherWrap = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  padding: 5px;
`
const WeatherText = styled.span`
  font-size: 12px;
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: 50px;
  padding: 10px;
  color: ${({theme}) => theme.colors.light};
`
