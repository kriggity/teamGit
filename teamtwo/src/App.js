import React from 'react';
import { geolocated } from "react-geolocated";
import './App.css';
import Nasa from './components/Nasa';
import Restaurant from './components/Restaurant';
import Weather from './components/Weather';

class App extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <div>
        <Nasa coords={this.props.coords} />
        <Restaurant coords={this.props.coords} />
        <Weather coords={this.props.coords} />
      </div>
    ) : (
            <div>Getting the location data&hellip; </div>
          );
  }
}
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App);