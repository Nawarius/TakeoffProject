import React from 'react'
import {Avatar, Grid, makeStyles, Typography, Button} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Modal from './Modal'

const useStyles = makeStyles((theme) => ({
    name: {
        margin: theme.spacing(4.5)
    },
    button:{
        margin:theme.spacing(4.5)
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
      margin: theme.spacing(2)
    },
}));

const ContactsPresent = ({data, submitHandler, changeHandle, open, setOpen, deleteHandle}) => {
    const classes = useStyles()

    const contacts = data.contacts.map((item,index,array)=>{
        
        return <>
            <Grid container direction = 'row'>
                <Avatar className = {classes.large} src = {item.avatar} name = 'avatar'/>
                <Typography variant = 'h6' className = {classes.name} > {item.firstName} </Typography>
                <Typography variant = 'h6' className = {classes.name} >{item.lastName}</Typography> 
                <Typography variant = 'h6' className = {classes.name} >{item.age}</Typography>
                <Typography variant = 'h6' className = {classes.name} >{item.email}</Typography>
                <Button color = 'primary' variant = 'contained'  className={classes.button}>Изменить</Button>
                <Button variant="contained" color="secondary" className={classes.button} onClick = {()=>{deleteHandle(item.firstName)}} startIcon={<DeleteIcon />}>Удалить</Button>
            </Grid>
        </>
    })
    return <>
    <Modal submitHandler = {submitHandler} changeHandle = {changeHandle} open = {open} setOpen = {setOpen}/>
    {contacts}
    </>
}

export default ContactsPresent