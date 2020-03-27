import React, { useState, useEffect } from 'react';

let APIkey = "07528bbf76b79b6c9e274bb94ee1500a";
let BaseURL = 'https://api.openweathermap.org/data/2.5/weather';
let url;

export default function Weather(props) {

    // console.log(props.coords);

    const [currentTemp, setCurrentTemp] = useState();
    const [showFahrenheit, setShowFahrenheit] = useState(true);
    const [tempUnits, setTempUnits] = useState('');
    
    // console.log(props.coords);
    let latitude = props.coords.latitude;
    let longitude = props.coords.longitude;


    const fetchResults = () => {
        console.log("fetchResults")

        if (showFahrenheit) {
            url = `${BaseURL}?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
            setTempUnits(" Fahrenheit")
            } else {
            url = `${BaseURL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${APIkey}`
            setTempUnits(" Centigrade")
            }

        setShowFahrenheit(!showFahrenheit)
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let tempVar = data.main.temp
            setCurrentTemp(data.main.temp)
            console.log(`current temp in F = ${tempVar}`)
            console.log(`the state variable currentTemp is ${currentTemp}`)
    })
    .catch(err => console.log(err))
}
    
    useEffect(() => {
        fetchResults()
    }
    , [])

    const convertTemp = () => {
        setShowFahrenheit(!showFahrenheit)
        fetchResults();
    }

    return (
        <>
            <h2>Weather</h2>
            <h5>Current temp: {currentTemp}{tempUnits}</h5>
            <button onClick={convertTemp}>Convert Temp</button>

        </>
    );
}