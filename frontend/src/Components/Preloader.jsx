import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
  preloader:{
      marginTop:'10%',
      marginLeft: '50%'
  }
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
      <CircularProgress className = {classes.preloader} />
  );
}