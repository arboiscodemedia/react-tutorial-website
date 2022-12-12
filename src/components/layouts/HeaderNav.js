import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Switch } from "@mui/material"; 
import { useContext } from "react";
import { Context } from "../../App";
import Avatar from "@mui/material/Avatar";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
  toolbar: {
    background: "purple",
    color: '#dfdfdf'
  },
  avatar:{
    marginRight: theme.spacing(2)
  }
}));
 



export default function HeaderNav(props) {
  const classes = useStyles()

  let { handleMode } = useContext(Context);

  return (
    <>
    <Toolbar className={classes.toolbar}>
        <Avatar className={classes.avatar} src="/img/dexter.png"/>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={props.handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Website
          </Typography>
          <Switch onChange={() => handleMode()} label="Dark Mode" />
        </Toolbar>
        
  </>
  )
}
