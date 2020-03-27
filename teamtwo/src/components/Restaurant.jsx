// import React from 'react';

// export default function Restaurant(props) {
//     // console.log(props.coords);
//     return(
//         <>
//         <h2>Restaurant</h2>
       
//         </>
//     );
// }

import React from 'react'
import DisplayRestaurants from './DisplayRestaurants'

export default class Restaurant extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // lat: props.coords.latitude,
            // long: props.coords.longitude,
            searchResults: '',
            single: ''
        }

    }

    componentWillMount() {
        // console.log('yo,')
    }

    componentDidMount() {
        // console.log('we done mounted')

        fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${this.props.lat}&lon=${this.props.long}`, {
            headers: {
                Accept: "application/json",
                "User-Key": "ef2686779cc2ca248052669cc5082fa8"
            }
        })
            .then(response => response.json())
            .then(searchData => {
                this.setState({
                    searchResults: searchData,
                    single: searchData.nearby_restaurants[0].restaurant.name
                })
                console.log('state with results', this.state.searchResults) 
                // console.log(searchData)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                
                <h2>Restaurants</h2>
                
                {this.state.searchResults ? <DisplayRestaurants single={this.state.single} /> : null}
            </div>
        )
    }
} 
// componentDidMount() {
//     fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${this.state.latitude}&lon=${this.state.longitude}`, {
//       headers: {
//         Accept: "application/json",
//         "User-Key": "c4a72bc0d1013c0944741ce9dc776eba"
//       }
//     }).then(res => res.json())
//     .then(json => {
//         this.setState({
//             restaurantArray : [...json.nearby_restaurants]
//         })
//     })
//   }

//     restaurantMapper(){
//       console.log(this.state.restaurantArray)
//     }
//   render() {
//     return (
//       <div>
//         {this.restaurantMapper()}
//       </div>
//     );
//   }
// }

