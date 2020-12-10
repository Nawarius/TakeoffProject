import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { IconButton, TextField, Grid } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import {ChangeContext} from './ContactsContainer'
import { useContext } from 'react';

function getModalStyle() {
  const top = 50 
  const left = 50 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  inputs:{
    margin:theme.spacing(1)
  },
  changeButton:{
    margin:theme.spacing(1)
  }
}));
export default function SimpleModal({setChangeOpenModal, openChangeModal, changeHandle, changeContactHandle}) {
  const classes = useStyles();
  const {firstName,lastName,age,avatar,email} = useContext(ChangeContext)

  const [modalStyle] = useState(getModalStyle);
  

  const handleClose = () => {
    setChangeOpenModal(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <form onSubmit = {changeContactHandle}>
      <Grid container direction="column" justify="center" alignItems="center">
          <TextField  className = {classes.inputs} value = {firstName}  variant="outlined" onChange = {changeHandle} name = 'firstName'/>
          <TextField  className = {classes.inputs} value = {lastName}  variant="outlined" onChange = {changeHandle} name = 'lastName'/>
          <TextField  className = {classes.inputs} value = {age}  type = 'number' variant="outlined" onChange = {changeHandle} name = 'age'/>
          <TextField  className = {classes.inputs} value = {email}  variant="outlined" onChange = {changeHandle} name = 'email'/>
          <TextField  className = {classes.inputs} value = {avatar}  variant="outlined" onChange = {changeHandle} name = 'avatar'/>
          <Grid>
            <IconButton color="primary" type = 'submit'>
              <CheckCircleIcon fontSize = 'large'/>
            </IconButton>
            <IconButton color="secondary" onClick = {handleClose}>
              <CancelIcon fontSize = 'large' />
            </IconButton>
          </Grid>
        </Grid>
      </form>
      
    </div>
  );

  return <>
      <Modal open={openChangeModal} onClose={handleClose}>
        {body}
      </Modal>
    </>
}