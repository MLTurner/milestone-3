import React from "react";
import googleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOutlinedIcon from '@material-ui/icons/LocationOutlined';
import Rating from '@material-ui/lab'
import useStyles from './styles'


const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)')
    return(
        <h1>Map</h1>
    );
}

export default Map;