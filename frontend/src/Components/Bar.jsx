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

const Bar = ({isLogged}) => {
    const classes = useStyles()
    return <>
        <AppBar position="static" >
        <Toolbar>
            <NavLink to = '/contacts' className = {classes.contacts}>
                <Button color="inherit">Contacts</Button>
            </NavLink>
            <NavLink to = '/login' className = {classes.navlink}>
                {!isLogged && <Button color="inherit">Login</Button>}
                {isLogged && <Button color="inherit">Admin</Button>}
            </NavLink>
            
        </Toolbar>
        </AppBar>

    </>
}

export default Bar