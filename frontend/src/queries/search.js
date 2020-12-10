import {gql} from '@apollo/client'

const SEARCH_CONTACTS = gql`
  query($firstName:String){
    contacts(firstName:$firstName){
        firstName
        lastName
        age
        avatar
        email
        _id
  }
}
`

export default SEARCH_CONTACTS