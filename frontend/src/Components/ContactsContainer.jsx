import React from 'react'
import ContactsPresent from './ContactsPresent'
import { useQuery, useMutation } from '@apollo/client'
import Preloader from './Preloader'
import ADD_CONTACT from '../queries/addContact'
import DELETE_CONTACT from '../queries/deleteContact'
import SEARCH_CONTACT from '../queries/search'
import CHANGE_CONTACT from '../queries/changeContact'
import { useState } from 'react'

export const ChangeContext = React.createContext()

const ContactsContainer = () => {
    const [firstName, setFirstName] = useState(null)
    const [firstNameForSearch, setFirstNameForSearch] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null) 
    const [age, setAge] = useState(null)
    const [avatar, setAvatar] = useState(null)
    const [id, setId] = useState(null)

    const [open, setOpen] = useState(false)
    const [openChangeModal, setChangeOpenModal] = useState(false)
    

    const [deleteContact] = useMutation(DELETE_CONTACT)
    const [addContact] = useMutation(ADD_CONTACT)
    const [changeContact] = useMutation(CHANGE_CONTACT)

    const { loading, error, data, refetch } = useQuery(SEARCH_CONTACT,{
      variables:{
        firstName:firstNameForSearch
      }
    });
    
    if (loading) return <Preloader />
    if (error) {console.log(error); return <p>Error :(</p>}
    
    const deleteHandle = (name)=>{
      deleteContact({ variables: { firstName:name } }).then(res=>{
        refetch()
      })
    }

    const changeContactHandle = (e) =>{
      e.preventDefault()
      setChangeOpenModal(false)
      changeContact({ variables: { _id:id, firstName, lastName, email, age, avatar } }).then(res=>{
        refetch()
      });
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
        case 'search':{
          setFirstNameForSearch(e.target.value)
          break
        }
        default:
          break
      }
    }

    return <>
      <ChangeContext.Provider value = {{firstName,lastName,email,age,avatar,id,setId,setFirstName, setAge, setAvatar, setEmail, setLastName}} >
        <ContactsPresent data = {data} submitHandler = {submitHandler} 
          changeHandle = {changeHandle} open = {open} setOpen = {setOpen}
          deleteHandle = {deleteHandle} firstNameForSearch = {firstNameForSearch}
          openChangeModal = {openChangeModal} setChangeOpenModal = {setChangeOpenModal}
          changeContactHandle = {changeContactHandle}
        />
      </ChangeContext.Provider>
     </>
}

export default ContactsContainer