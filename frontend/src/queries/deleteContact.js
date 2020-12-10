import {gql} from '@apollo/client'

const DELETE_CONTACT = gql`
    mutation($_id:ID){
        deleteContact(_id:$_id){
            firstName
            lastName
        }
    }
`

export default DELETE_CONTACT