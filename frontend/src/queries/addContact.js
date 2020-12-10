import {gql} from '@apollo/client'

const ADD_CONTACT = gql`
  mutation ($firstName:String,$lastName:String,$age:Int,$email:String,$avatar:String){
    addContact(Input:{firstName:$firstName,lastName:$lastName,age:$age,email:$email,avatar:$avatar}){
        firstName
        lastName
        age
        avatar
        email
  }
}
`

export default ADD_CONTACT