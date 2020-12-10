import {gql} from '@apollo/client'

const DELETE_CONTACT = gql`
    mutation($firstName:String){
        deleteContact(firstName:$firstName){
            firstName
            lastName
        }
    }
`

export default DELETE_CONTACT