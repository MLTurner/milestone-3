import React from "react";
import Button from "@mui/material/Button";
import {
  SvgIcon,
  AccountCircle,
  FavoriteIcon,
  ReviewIcon,
} from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { CssBaseline, Grid, ThemeProvider, createTheme } from "@mui/material";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
  return (
    <>
    <CssBaseline />
    <Header />
    <Grid container spacing={3} style= {{ width: '100%' }}>
      <Grid item xs={12} md={4}>
        <List />
      </Grid>
      <Grid item xs={12} md={8}>
        <Map />
      </Grid>
    </Grid>
  </>
);
}
expor

  //   <Header>
  //     <Button startIcon={<MenuOutlinedIcon />} variant="text">
  //       Text
  //     </Button>
  //     <Button
  //       menuIcon={<MenuOutlinedIcon />}
  //       variant="contained"
  //       fontSize="small"
  //     >
  //       Menu
  //     </Button>
  //     <Button variant="outlined">Outlined</Button>
  //   </Header>
  //   <Grid item xs={12} md={4} container spacing={3} style= {{ width: '100%' }}>

  //       <ThemeProvider>
  //          <List />
  //        </ThemeProvider>
  //        </Grid>
  
  // );

  {/* // return (
  //   <>
  //     <CssBaseline />
  //     <Header />
  //     <Grid container spacing={3} style= {{ width: '100%' }}>
  //       <Grid item xs={12} md={4}>
  //         <ThemeProvider>
  //           <List />
  //         </ThemeProvider>
  //       </Grid>
  //       <Grid item xs={12} md={4}>
  //         <Map />
  //       </Grid>
  //     </Grid>
  //   </>
  // );
}; */}

export default App;
