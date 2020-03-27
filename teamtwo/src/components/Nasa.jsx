import React from 'react';
import NasaDisplay from './NasaDisplay';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default class Nasa extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            img: 'https://via.placeholder.com/311?text=Loading...',
            lat: props.coords.latitude,
            long: props.coords.longitude,
            dim: .0333, // width and height of image in degrees
            api_key: 'ijQTrRZY7zjULimfFWVPDiPf0lYed77MzVxswQdn'
        }
    }

    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
            mode: 'cors',
            headers: {
                'access-control-allow-origin': "*",
                'access-control-allow-methods': 'GET, POST, PUT, DELETE',
                'access-control-allow-headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
            }
        };
        let url = `https://api.nasa.gov/planetary/earth/imagery/?lon=${this.state.long}&lat=${this.state.lat}&cloud_score=false&dim=${this.state.dim}&api_key=${this.state.api_key}`;
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    img: result.url
                })
            })
            .catch(error => console.log('error', error));
    }

    render() {
        return (
            <>
                <Card>
                    <CardContent>
                        <h2>Eye in the Sky</h2>
                        <NasaDisplay url={this.state.img} />
                    </CardContent>
                </Card>
            </>
        );
    }
}