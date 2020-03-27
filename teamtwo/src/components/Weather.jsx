import React from 'react';
/* 
Open Weather API -  https://openweathermap.org/current
Account in OpenWeather : https://home.openweathermap.org/users/sign_in
userid=JeffRichardson573 / email=jeffrichardson573@gmail.com / pwd=EFATeam2
*/
// let APIkey = "07528bbf76b79b6c9e274bb94ee1500a"; // this key blocked; too many calls jeffrichardson573@gmail.com
// username : ElevenFiftyTeamTwo. email jeffrichardsonjob@gmail.com  pwd: teamTwo1150
let APIkey = "8b4b32edd6bce3eec11cc1a65859033d";
let BaseURL = 'https://api.openweathermap.org/data/2.5/weather';
let url;


export default class Weather extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            latitude: props.coords.latitude,
            longitude: props.coords.longitude,
            currentTemp: 0,
            showFahrenheit: true,
            tempUnits: ' Fahrenheit'
        }
    }

    convertTemp() {
        
        if (this.state.showFahrenheit) {
            this.setState({tempUnits: " Centigrade"})
            url = `${BaseURL}?lat=${this.state.latitude}&lon=${this.state.longitude}&units=metric&appid=${APIkey}`
        } else {
            url = `${BaseURL}?lat=${this.state.latitude}&lon=${this.state.longitude}&units=imperial&appid=${APIkey}`
            this.setState({tempUnits: " Fahrenheit"})
        }
        
        this.setState({showFahrenheit: !this.state.showFahrenheit})

        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({currentTemp: data.main.temp})
            console.log(`the state variable currentTemp is ${this.state.currentTemp}`)
        })
        .catch(err => console.log(err))
    }



    componentDidMount() {
        
            url = `${BaseURL}?lat=${this.state.latitude}&lon=${this.state.longitude}&units=imperial&appid=${APIkey}`
    
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({currentTemp: data.main.temp})
            console.log(`the state variable currentTemp is ${this.state.currentTemp}`)
        })
        .catch(err => console.log(err))
    }

    render(){

        console.log(this.state.latitude);

    return (
        <>
            <h2>Weather</h2>
            <h5>Current temp: {this.state.currentTemp}{this.state.tempUnits}</h5>
            <button onClick={() => this.convertTemp()}>Convert Temp</button>

        </>
    );
}
    }