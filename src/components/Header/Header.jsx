import React from 'react';
// import { Autocomplete } from '@react-google-maps/api';
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  IconButton,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { BlurOn } from '@mui/icons-material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
// import Box from '@mui/material/Box';
// import MenuIcon from '@mui/icons-material/Menu';

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
    <AppBar
      position='static'
      sx={{
        bgcolor: 'green',
      }}
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
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder='Search…'
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        <Stack direction='row' spacing={2}>
          <Button color='inherit'>Favorites</Button>
          <Button color='inherit'>Reviews</Button>
          <Button color='inherit'>Login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

// const Header = () => {
//   const classes = useStyles();

//   return (
//     <AppBar position='static'>
//       <Toolbar className={classes.toolbar}>
//         <Typography variant='h5' className={classes.title}>
//           {/* Typography is every text element but you can assign the variant. */}
//           Welcome to the SMELP App
//         </Typography>
//         <Box display='flex'>
//           <Typography variant='h6' className={classes.title}>
//             Explore new places
//           </Typography>
//           {/* <Autocomplete> */}
//           <div className={classes.search}>
//             <div className={classes.searchIcon}>
//               <Search />
//             </div>
//             <InputBase
//               placeholder='Search...'
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput,
//               }}
//             />
//           </div>
//           {/* </Autocomplete> */}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

export default Header;
