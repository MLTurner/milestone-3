import {makeStyles} from 'material-ui/core';


export default makeStyles(() => ({
palette:{
        primary:{
            main: "#58C790",
            light: "#99F4C8"
        },
        secondary:{
            main: "#FDFC9B",
            light: "#FEFFB3"
        },
        triColor:{
            lightGreen: "#99F4C8",
            lightBlue: "#A1F0ED",
            lightYellow: "#FEFFB3"
        }
    },
    paper: {
        padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',
      },
      mapContainer: {
        height: '85vh', width: '100%',
      },
      markerContainer: {
        position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
      },
      pointer: {
        cursor: 'pointer',
      },
}))

