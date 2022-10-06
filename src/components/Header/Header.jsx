import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Button, IconButton, Toolbar, Typography, Paper, Stack, InputBase, Menu, Box } from "@mui/material";
import {styled, alpha} from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
import { BlurOn } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsIcon from '@mui/icons-material/Search';
import Icon from '@mui/material/Icon';
import AccountCircle from "@mui/icons-material/AccountCircle";
import './headerStyles'



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const Header = () => {
  return (
    <Paper>
      <Box sx={{ flexGrow: 1 }}></Box>
    <AppBar
      position='static'
    >
      
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
          <BlurOn />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Welcome to the SMELP App!
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: 'triColor.lightBlue'}} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder='Search…'
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Stack direction='row' spacing={2} sx={{ color: 'tricolor.lightBlue' }}>
          <Button variant="contained" sx={{ color: 'triColor.lightYellow'}}>Favorites</Button>
          <Button variant="contained" sx={{ color: 'triColor.lightYellow'}}>Reviews</Button>
          <Button variant="contained" sx={{ color: 'triColor.lightYellow'}}>Login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
    </Paper>
  );
};














//Typography is every text element, but you can change the variants (headings, subtitles and titles)

// const Header = () => {
//     const 


//         return(

//             <AppBar>


//             </AppBar>
//         )

// }


// const Header = () => {
//   return (
//     <Paper>
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             SMELP
//           </Typography>
//           <AccountCircle />
//           <Button sx={{ color: 'triColor.lightYellow'}}>Login</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//     </Paper>
//   );
// }


// const Header = () => {
//     const classes = useStyles();
// //AppBar, Box components up to date
//     return(
//          <AppBar position="static">
//         //     <Toolbar className={classes.Toolbar}>
//         //         <Typography variant="h5" className={classes.title}>
//         //             SMELP
//         //         </Typography>
//         //         <Box display="flex">
//         //             <Typography variant="h6">
//         //             Explore Gas Stations/Rest Stops
//         //             </Typography>
//         //             <Autocomplete>
//         //                 <div className={classes.search}>
//         //                     <div className={classes.searchIcon}>
//         //                         <Icon />
//         //                     </div>
//         //                     {/* classes is equal to an object because we want to add multiple classes*/}
//         //                     <InputBase placeholder="Search..." classes={{
//         //                         root: classes.inputRoot,
//         //                         input: classes.inputInput
//         //                         }} />
//         //                 </div>
//         //             </Autocomplete>
//         //         </Box>
//         //     </Toolbar>
//         // </AppBar>
//     );
// }

export default Header;