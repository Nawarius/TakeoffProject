import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Bar from './Components/Bar'
import Main from './Components/MainPresent'
import Contacts from './Components/ContactsContainer'
import Login from './Components/LoginContainer'
import {Container, Paper} from '@material-ui/core'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React, { useState } from 'react';

const client = new ApolloClient({
  uri: 'http://localhost:8000',
  cache: new InMemoryCache()
});

function App() {
  const [isLogged,setLogin] = useState(false)

  return <>
    <Switch>
      <ApolloProvider client = {client}>
        <Container style = {{height:'100%'}}>
          <Paper elevation = {10} style = {{minHeight:'100%'}} >
          <Bar />
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/contacts">
              {isLogged && <Contacts />}
              {!isLogged && <Redirect to = '/login' />}
            </Route>
            <Route path="/login">
              {isLogged && <Redirect to = '/contacts' />}
              {!isLogged && <Login setLogin = {setLogin}/>}
              
            </Route>
            
            </Paper>
        </Container>
      </ApolloProvider>
    </Switch>



  </>
}

export default App;
