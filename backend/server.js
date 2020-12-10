const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const server = new ApolloServer({ typeDefs, resolvers });



mongoose.connect(`mongodb+srv://User:uEN6jV8YNm23u4l6@clusterz.glx3q.mongodb.net/Takeoff?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(res=>{
  server.listen({port:8000}).then(() => {
    console.log(`DB Connected`);
  });
}).catch(err=>{
  throw err
})