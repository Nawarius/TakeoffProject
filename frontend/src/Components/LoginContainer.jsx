import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import LoginPresent from './LoginPresent'
import LOGIN from '../queries/login'
import { useLazyQuery } from '@apollo/client'

const LoginContainer = ({setLogin}) => {
    const [username, setUsername] = useState(null)
    const [pass, setPass] = useState(null)

    const [loginQuery, {data}] = useLazyQuery(LOGIN)
    if(data) setLogin(data.login)

    const submitHandler = (e)=>{
        e.preventDefault()
        loginQuery({variables:{username,pass}})
    }
    const changeHandle = (e)=>{
        switch(e.target.name){
            case 'username':{
                setUsername(e.target.value)
                break
            }
            case 'pass':{
                setPass(e.target.value)
                break
            }
            default:
                break
        }
    }
    return <>
        <LoginPresent submitHandler = {submitHandler} changeHandle = {changeHandle}/>
        
    </>
}

export default LoginContainer