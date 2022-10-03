import React from 'react';
import logo from './logo.svg';
import { CssBaseline, Grid } from '@material-ui/core';
import { Counter } from './features/counter/Counter';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import './App.css';
const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style= {{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={4}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
}
export default App;
