import React from "react";

import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Paper,
  Stack,
  InputBase,
  Box
} from "@mui/material";

import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { BlurOn } from "@mui/icons-material";
import ReviewsIcon from '@mui/icons-material/Reviews';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircle from "@mui/icons-material/AccountCircle";
import "./headerStyles";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  flexWrap: 'wrap',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));


const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));


const Header = () => {
  return (
    <Paper elevation={4}>
      
      <Box sx={{ flexGrow: 1 }}></Box>
      <AppBar position="static" display='flex' flexWrap='wrap'>
        <Toolbar  position='static'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <BlurOn />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome to the SMELP App!
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "triColor.lightBlue" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Stack
            direction="row"
            spacing={2}
            sx={{ color: "tricolor.lightBlue" }}
          >
            <Button variant="contained" sx={{ color: "triColor.lightYellow" }}>
            <FavoriteIcon />
              Favorites
            </Button>
            <Button variant="contained" sx={{ color: "triColor.lightYellow" }}>
              <ReviewsIcon />
              Reviews
            </Button>
            <Button variant="contained" sx={{ color: "triColor.lightYellow" }}>
              <AccountCircle />
              Login
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      
    </Paper>
  );
};


export default Header;