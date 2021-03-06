import React from 'react';
import {AppBar, Toolbar,Typography ,Button , IconButton  } from '@material-ui/core';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { useHistory } from 'react-router-dom';

const MAppBar = ()=>{
  let history = useHistory();
return (
    <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
      <MonetizationOnIcon />
      </IconButton>
      <Typography variant="h6" >
        Money Transfer App
      </Typography>
      <Button color="inherit" onClick={() => history.push('/create')} >Create Account</Button>
      <Button color="inherit" onClick={() => history.push('/list')}>List Account</Button>
    </Toolbar>
  </AppBar>
);
}


export default MAppBar;