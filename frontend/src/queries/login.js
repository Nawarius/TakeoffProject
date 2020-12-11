import {gql} from '@apollo/client'

const LOGIN = gql`
  query($username:String, $pass:String){
    login(username:$username, pass:$pass)
}
`

export default LOGIN