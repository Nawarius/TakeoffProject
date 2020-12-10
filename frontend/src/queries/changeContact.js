import {gql} from '@apollo/client'

const CHANGE_CONTACT = gql`
  mutation ($_id:ID, $firstName:String,$lastName:String,$age:Int,$email:String,$avatar:String){
    changeContact(Input:{_id:$_id,firstName:$firstName,lastName:$lastName,age:$age,email:$email,avatar:$avatar}){
        firstName
        lastName
        age
        avatar
        email
  }
}
`

export default CHANGE_CONTACT