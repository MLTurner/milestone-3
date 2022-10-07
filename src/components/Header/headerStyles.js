import {createTheme} from '@mui/material';


const headerTheme = createTheme({
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
            lightBlue: "#0388FC",
            lightYellow: "#FEFFB3"
        }
    }
});

export default headerTheme;