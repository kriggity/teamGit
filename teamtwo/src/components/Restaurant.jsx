import React from 'react'
// import DisplayRestaurants from './DisplayRestaurants'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: props.coords.latitude,
            long: props.coords.longitude,
            city: '',
            nearbyRestaurants: []
        }
        this.restMapper = newArr => newArr.map((loc, index) => {
            return (
                <ListItem key={index}>
                    <ListItemText>
                        <a href={loc.restaurant.url} target="_blank" rel="noreferrer noopener">
                            {loc.restaurant.name}
                        </a>
                    </ListItemText>
                </ListItem>
            )
        });
    }

    componentDidMount() {
        fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${this.state.lat}&lon=${this.state.long}`, {
            headers: {
                Accept: "application/json",
                "User-Key": "ef2686779cc2ca248052669cc5082fa8"
            }
        })
            .then(response => response.json())
            .then(results => {
                this.setState({
                    nearbyRestaurants: results.nearby_restaurants,
                    city: results.location.city_name
                });
            })
            .catch(err => console.log(err));

    }

    render() {
        return (
            <>
                <Card>
                    <CardContent>
                        <h2>Nearby Restaurants</h2>
                        <List>
                            {this.restMapper(this.state.nearbyRestaurants)}
                        </List>
                    </CardContent>
                </Card >
            </>
        )
    }
} 