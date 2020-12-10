import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import LoginPresent from './LoginPresent'

const LoginContainer = ({setLogin, isLogged}) => {
    const [username, setUsername] = useState(null)
    const [pass, setPass] = useState(null)

    const submitHandler = (e)=>{
        e.preventDefault()
        if(username === "admin" && pass === "admin"){
            setLogin(true)
            return <Redirect to = '/contacts' />
        }
       
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