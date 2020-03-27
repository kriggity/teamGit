// import React from 'react';

// export default function DisplayRestaurants(props) {
//     return (
//         <div>
//              {props.single}
//              <br/>
//              {props.singleTwo}
//              <br/>
//              {props.singleThree}
//              <br/>
//              {props.singleFour}
//              <br/>
//              {props.singleFive}
//              <br/>
//              {props.singleSix}
//              <br/>
//              {props.singleSeven}
//              <br/>
//              {props.singleEight}
//              <br/>
//              {props.singleNine}

//         </div>
//     )
// }
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles({
    root: {
        width: '250px',
        backgroundColor: 'green',
        // textAlign: 'center',
    }
})

export default function DisplayRestaurants(props) {
    const classes = useStyles();

    return (
        <div>
           <Card className={classes.root}>
                <CardContent>
                    {props.single}
                    <br/>
                    {props.singleTwo}
                    <br/>
                    {props.singleThree}
                    <br/>
                    {props.singleFour}
                    <br/>
                    {props.singleFive}
                    <br/>
                    {props.singleSix}
                    <br/>
                    {props.singleSeven}
                    <br/>
                    {props.singleEight}
                    <br/>
                    {props.singleNine}
                </CardContent>
            </Card>
        </div >
    )
}