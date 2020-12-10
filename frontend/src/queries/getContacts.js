import {gql} from '@apollo/client'
const GET_CONTACTS = gql`
  query{
    contacts{
        firstName
        lastName
        age
        avatar
        email
  }
}
`

export default GET_CONTACTS