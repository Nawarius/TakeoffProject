import './App.css';
import { Switch, Route } from 'react-router-dom';
import Bar from './Components/Bar'
import Main from './Components/MainPresent'
import Contacts from './Components/ContactsContainer'
import Login from './Components/LoginPresent'
import {Container, Paper} from '@material-ui/core'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8000',
  cache: new InMemoryCache()
});

function App() {
  
  return <>
    <Switch>
      <ApolloProvider client = {client}>
        <Container style = {{height:'100%'}}>
          <Paper elevation = {10} >
          <Bar />
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            
            </Paper>
        </Container>
      </ApolloProvider>
    </Switch>



  </>
}

export default App;
