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
                    single: searchData.nearby_restaurants[0].restaurant.name,
                    singleTwo: searchData.nearby_restaurants[1].restaurant.name,
                    singleThree: searchData.nearby_restaurants[2].restaurant.name,
                    singleFour: searchData.nearby_restaurants[3].restaurant.name,
                    singleFive: searchData.nearby_restaurants[4].restaurant.name,
                    singleSix: searchData.nearby_restaurants[5].restaurant.name,
                    singleSeven: searchData.nearby_restaurants[6].restaurant.name,
                    singleEight: searchData.nearby_restaurants[7].restaurant.name,
                    singleNine: searchData.nearby_restaurants[8].restaurant.name,
                })
                console.log('state with results', this.state.searchResults) 
                // console.log(searchData)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                
                <h3>Restaurants near you:</h3>
                
                {this.state.searchResults ? <DisplayRestaurants 
                single={this.state.single} 
                singleTwo={this.state.singleTwo} 
                singleThree={this.state.singleThree} 
                singleFour={this.state.singleFour}
                singleFive={this.state.singleFive}
                singleSix={this.state.singleSix}
                singleSeven={this.state.singleSeven}
                singleEight={this.state.singleEight}
                singleNine={this.state.singleNine}
                /> : null}
            </div>
        )
    }
} 
// componentDidMount() {
//     fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${this.props.lat}&lon=${this.props.long}`, {
//       headers: {
//         Accept: "application/json",
//         "User-Key": "ef2686779cc2ca248052669cc5082fa8"
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

