import React from 'react';
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

export default function NasaDisplay(props) {
    return (
        <>
            <CardMedia
                image={props.url}
                title="Landsat 8 Pic"
            />
        </>
    );
}