import React from 'react';

import { geolocated } from "react-geolocated"; // this is what gets the Lat/Long

// Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

// Components
import Nasa from './components/Nasa';
import Restaurant from './components/Restaurant';
import Weather from './components/Weather';

import './App.css';

class App extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <div>
        <Container max-width="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} className="header gridWrapper">
              <h1>What's going on at:<br /><sub>Lat: {this.props.coords.latitude}, Long: {this.props.coords.longitude} </sub></h1>
            </Grid>
            <Grid item xs={12} sm={4} className="weather gridWrapper">
              <Weather coords={this.props.coords} />
            </Grid>
            <Grid item xs={12} sm={4} className="nasaWrapper gridWrapper">
              <Nasa coords={this.props.coords} />
            </Grid>
            <Grid item xs={12} sm={4}className="restaurant gridWrapper">
              <Restaurant coords={this.props.coords} />
            </Grid>
          </Grid>
        </Container>
      </div>
    ) : (
            <div id="gettingData">
              <h1>
                Getting the location data&hellip;
              </h1>
              <CircularProgress />
            </div>

          );
  }
}
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App);