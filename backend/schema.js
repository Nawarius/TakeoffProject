const { gql } = require('apollo-server');

const typeDefs = gql`
 type Contact {
      _id:ID
      firstName: String,
      lastName: String,
      age:Int,
      avatar:String,
      email:String,
  }
  input ContactInput {
      _id:ID,
      firstName: String,
      lastName: String,
      age:Int,
      avatar:String,
      email:String
  }
  type Query {
    contacts(firstName:String): [Contact],
    
  }
  type Mutation {
      addContact(Input:ContactInput): Contact
      deleteContact(_id:ID): Contact
      changeContact(Input:ContactInput): Contact
  }
`

module.exports = typeDefs