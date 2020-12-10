const { gql } = require('apollo-server');

const typeDefs = gql`
 type Contact {
      firstName: String,
      lastName: String,
      age:Int,
      avatar:String,
      email:String,
  }
  input ContactInput {
      firstName: String,
      lastName: String,
      age:Int,
      avatar:String,
      email:String
  }
  type Query {
    contacts: [Contact],
    
  }
  type Mutation {
      addContact(Input:ContactInput): Contact
      deleteContact(firstName:String): Contact
  }
`

module.exports = typeDefs