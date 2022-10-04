import React from 'react';
import { CssBaseline, Grid, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import './App.css';

const App = () => {
  const theme= createTheme({
    palette:{
      primary: {
        main: '#58C790',
        light: '#99F4C8',
        yellow: '#FDFC9B',}
    }

  })



  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style= {{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <ThemeProvider>
            <List />
          </ThemeProvider>
        </Grid>
        <Grid item xs={12} md={4}>
          <Map />
        </Grid>
      </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
