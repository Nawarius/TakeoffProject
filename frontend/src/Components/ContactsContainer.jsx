import React from 'react'
import ContactsPresent from './ContactsPresent'
import { useQuery, useMutation, useLazyQuery } from '@apollo/client'
import Preloader from './Preloader'
import GET_CONTACTS from '../queries/getContacts'
import ADD_CONTACT from '../queries/addContact'
import DELETE_CONTACT from '../queries/deleteContact'
import { useState } from 'react'

const ContactsContainer = () => {
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null) 
    const [age, setAge] = useState(null)
    const [avatar, setAvatar] = useState(null)
    const [open, setOpen] = useState(false);

    const [deleteContact] = useMutation(DELETE_CONTACT)
    const [addContact] = useMutation(ADD_CONTACT)

    const { loading, error, data, refetch } = useQuery(GET_CONTACTS,{
      variables:{
        firstName,
        lastName,
        age,
        email,
        avatar
      }
    });
    

    if (loading) return <Preloader />
    if (error) {console.log(error); return <p>Error :(</p>}

    const deleteHandle = (name)=>{
      deleteContact({ variables: { firstName:name } }).then(res=>{
        refetch()
      })
    }

    const submitHandler = (e) => {
      e.preventDefault()
      setOpen(false)
      addContact({ variables: { firstName, lastName, email, age, avatar } }).then(res=>{
        refetch()
      });
    }

    const changeHandle = (e) => {
      switch(e.target.name){
        case 'firstName':{
          setFirstName(e.target.value)
          break
        }
        case 'lastName':{
          setLastName(e.target.value)
          break
        }
        case 'age':{
          setAge(+e.target.value)
          break
        }
        case 'email':{
          setEmail(e.target.value)
          break
        }
        case 'avatar':{
          setAvatar(e.target.value)
          break
        }
        default:
          break
      }
    }

    return <ContactsPresent data = {data} submitHandler = {submitHandler} changeHandle = {changeHandle} open = {open} setOpen = {setOpen} deleteHandle = {deleteHandle}/>
}

export default ContactsContainer