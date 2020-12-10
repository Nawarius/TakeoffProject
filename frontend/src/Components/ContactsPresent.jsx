import React from 'react'
import {Avatar, Grid, makeStyles, Typography, Button, TextField} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import ModalAdd from './ModalAdd'
import ModalChange from './ModalChange'
import { useContext } from 'react';
import {ChangeContext} from './ContactsContainer'

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
    search:{
        margin:theme.spacing(1),
        width:"99%"
    }
}));

const ContactsPresent = ({data, submitHandler, changeHandle, open, setOpen, deleteHandle, firstNameForSearch,setChangeOpenModal, openChangeModal, changeContactHandle }) => {
    const classes = useStyles()
    const {setFirstName, setAge, setAvatar, setEmail, setLastName, setId} = useContext(ChangeContext)
    console.log(data.contacts)
    const contacts = data.contacts.map((item,index,array)=>{
    //console.log(item)
        return <>
            <Grid container direction = 'row'>
                <Avatar className = {classes.large} src = {item.avatar} name = 'avatar'/>
                <Typography variant = 'h6' className = {classes.name} > {item.firstName} </Typography>
                <Typography variant = 'h6' className = {classes.name} >{item.lastName}</Typography> 
                <Typography variant = 'h6' className = {classes.name} >{item.age}</Typography>
                <Typography variant = 'h6' className = {classes.name} >{item.email}</Typography>
                <Button color = 'primary' variant = 'contained'  className={classes.button} onClick = {()=>{
                    setFirstName(item.firstName)
                    setLastName(item.lastName)
                    setEmail(item.email)
                    setAge(item.age)
                    setAvatar(item.avatar)
                    setId(item._id)
                    setChangeOpenModal(true)}}
                >Изменить</Button>
                <Button variant="contained" color="secondary" className={classes.button} onClick = {()=>{deleteHandle(item.firstName)}} startIcon={<DeleteIcon />}>Удалить</Button>
            </Grid>
        </>
    })
    return <>
        <TextField autoFocus name = 'search' label="Поиск по имени" type="search" className = {classes.search} onChange = {changeHandle} value = {firstNameForSearch}/>
        <ModalChange openChangeModal = {openChangeModal}  setChangeOpenModal = {setChangeOpenModal} 
            changeHandle = {changeHandle} submitHandler = {submitHandler} changeContactHandle = {changeContactHandle}
        />
        <ModalAdd submitHandler = {submitHandler} changeHandle = {changeHandle} open = {open} setOpen = {setOpen} />
        {contacts}
    </>
    

}

export default ContactsPresent