import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, IconButton, TextField, Grid } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import AddIcon from '@material-ui/icons/Add';

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
  addButton:{
    margin:theme.spacing(1)
  }
}));
export default function SimpleModal({submitHandler, changeHandle, open, setOpen}) {
  const classes = useStyles();
  
  const [modalStyle] = useState(getModalStyle);
  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <form onSubmit = {submitHandler}>
      <Grid container direction="column" justify="center" alignItems="center">
          <TextField  className = {classes.inputs} label="FirstName" variant="outlined" onChange = {changeHandle} name = 'firstName'/>
          <TextField  className = {classes.inputs} label="LastName" variant="outlined" onChange = {changeHandle} name = 'lastName'/>
          <TextField  className = {classes.inputs} label="Age" type = 'number' variant="outlined" onChange = {changeHandle} name = 'age'/>
          <TextField  className = {classes.inputs} label="Email" variant="outlined" onChange = {changeHandle} name = 'email'/>
          <TextField  className = {classes.inputs} label="AvatarURL" variant="outlined" onChange = {changeHandle} name = 'avatar'/>
          <Grid>
            <IconButton color="primary" type = 'submit'>
              <AddCircleIcon fontSize = 'large'/>
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
      <Button  onClick={handleOpen} color = 'primary' variant = 'contained' className={classes.addButton} endIcon = {<AddIcon/>}>Добавить</Button>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </>
}