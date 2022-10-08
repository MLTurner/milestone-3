import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  typography: {
    color: "darkgreen",
    variant: "h4",
    padding: "20px",
    backgroundColor: "skyblue",
    border: "solid 1px",
    fontFamily: "Roboto",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: "30px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: "25px",
  },
  marginBottom: {
    marginBottom: "30px",
  },
  list: {
    height: "75vh",
    overflow: "auto",
  },
}));
// import {createTheme} from '@mui/material';

// const listTheme = createTheme({
//     palette:{
//         primary:{
//             main: "#58C790",
//             light: "#99F4C8"
//         },
//         secondary:{
//             main: "#FDFC9B",
//             light: "#FEFFB3"
//         },
//         triColor:{
//             lightGreen: "#99F4C8",
//             lightBlue: "#A1F0ED",
//             lightYellow: "#FEFFB3"
//         }
//     },
//     formControl: {
//      minWidth: 120, marginBottom: '30px',
//       },

//       loading: {
//         height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
//       },
//       container: {
//         padding: '25px',
//       },
//       marginBottom: {
//         marginBottom: '30px',
//       },
//       list: {
//         height: '75vh', overflow: 'auto',
//       },
// });

// export default listTheme;
