import React from 'react';
// import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box} from '@mui/material';
import { Search } from '@mui/icons-material';

import styled from './headerStyles';



const Header = () => {
    const classes = styled();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}> 
                {/* Typography is every text element but you can assign the variant. */}
                    Welcome to the SMELP App
                </Typography>
                <Box display="flex">
                <Typography variant="h6" className={classes.title}>
                     Explore new places
                </Typography>
                {/* <Autocomplete> */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search />
                        </div>
                        <InputBase placeholder='Search...' classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                    </div>
                {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
