import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function RestaurantDisplay(props) {
    return (
            <ListItem button href={loc.restaurant.url}>
                <ListItemText>
                    {/* <a href={loc.restaurant.url} target="_blank" rel="noreferrer noopener"> */}
                    {/* {loc.restaurant.name} */}
                    {/* </a> */}
                    {props.name}
                </ListItemText>
            </ListItem>
    );
}