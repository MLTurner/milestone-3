import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './listStyles.js';

const List = ({ places, type, setType, rating, setRating, childClicked, isLoading }) => {
  const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <Box className={classes.container}>
      <Paper elevation={4}>
      <Typography className={classes.typography} variant="h4">Gas stations near you:</Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel id="type">Type</InputLabel>
            <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="gas_stations">Gas Stations</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="rating">Rating</InputLabel>
            <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
      </Paper>
    </Box>
  );
};

export default List;

// import { React, useState } from "react";
// import {
//   Typography,
//   InputLabel,
//   Paper,
//   MenuItem,
//   FormControl,
//   Select,
//   Stack,
// } from "@mui/material";

// import { styled, alpha } from "@mui/material/styles";

// import "./listStyles";


// const StyledBox = styled("div")(({ theme }) => ({
//   alignItems: "left",
//   position: "sticky",
//   borderRadius: "theme.shape.borderRadius",
//   display: "flex",
//   width: "50%",
// }));

// const List = () => {
//   const [type, setType] = useState("gas_stations");
//   const [rating, setRating] = useState("");

//   const handleChange = (event) => {
//     setRating(event.target.value);
//   };

//   return (
//     <StyledBox>
//       <Paper elevation={4}>
//         <Typography sx={{ color: "darkgreen", variant: "h4", padding: "20px",  backgroundColor: "skyblue",
//               border: "solid 1px",
//               fontFamily: "Roboto",}}> Gas Stations near you: </Typography>
//           <Stack
//             sx={{
//               backgroundColor: 'triColor.lightYellow',
//               padding: "20px",
//               border: 'solid 1px'
//             }}
//           >
//             <FormControl fullWidth sx={{ m: 1 }}>
//               <InputLabel>Type</InputLabel>
//               <Select value={type} onChange={(e) => setType(e.target.value)}>
//                 <MenuItem value="gas_stations">Gas Stations</MenuItem>
//               </Select>
//             </FormControl>
//             <FormControl fullWidth sx={{ m: 1 }}>
//               <InputLabel id="rating-label">Rating</InputLabel>
//               <Select
//                 labelId="rating-label"
//                 id="select-rating-label"
//                 value={rating}
//                 label="Rating"
//                 onChange={handleChange}
//               >
//                <MenuItem value={0}>All</MenuItem>
//                 <MenuItem value={3}>Above 3.0</MenuItem>
//                 <MenuItem value={4}>Above 4.0</MenuItem>
//                 <MenuItem value={4.5}>Above 4.5</MenuItem>
//               </Select>
//             </FormControl>
//           </Stack>
        
//       </Paper>
//     </StyledBox>
//   );
// };

// export default List;
