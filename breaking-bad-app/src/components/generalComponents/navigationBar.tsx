import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      display: 'flex',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      margin: '20px',
    },
  }),
);

const SearchAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Link to='/home'>
                <Typography className={classes.title} variant="h6" noWrap>
                    Home
                </Typography>
            </Link>
            <Link to='/episodes'>
                <Typography className={classes.title} variant="h6" noWrap>
                    Episodes
                </Typography>
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SearchAppBar;