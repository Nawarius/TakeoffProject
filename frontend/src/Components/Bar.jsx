import React from 'react'
import {AppBar, makeStyles, Toolbar, Button} from '@material-ui/core'
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    contacts: {
      flexGrow: 1,
      textDecoration: 'none',
      color: 'inherit'
    },
    navlink:{
        textDecoration: 'none',
        color: 'inherit'
    }
  }));

const Bar = () => {
    const classes = useStyles()
    return <>
        <AppBar position="static" >
        <Toolbar>
            <NavLink to = '/contacts' className = {classes.contacts}>
                <Button color="inherit">Contacts</Button>
            </NavLink>
            <NavLink to = '/login' className = {classes.navlink}>
                <Button color="inherit">Login</Button>
            </NavLink>
        </Toolbar>
        </AppBar>

    </>
}

export default Bar