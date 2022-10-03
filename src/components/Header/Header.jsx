import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

//Typography is every text element, but you can change the variants (headings, subtitles and titles)
//useStyles is a hook
import useStyles from './headerStyles'


const Header = () => {
    const classes = useStyles();

    return(
        <AppBar position="static">
            <Toolbar className={classes.Toolbar}>
                <Typography variant="h5" className={classes.title}>
                    SMELP
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                    Explore Gas Stations/Rest Stops
                    </Typography>
                    <Autocomplete>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            {/* classes is equal to an object because we want to add multiple classes*/}
                            <InputBase placeholder="Search..." classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                                }} />
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;