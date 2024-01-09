import axios from 'axios'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from './context/UserContext'

export default function LogIn() {
  const nav = useNavigate()
  const {setLogIn}  = useContext(UserContext)
  const onSubmit = (e)=>{
    e.preventDefault()
    axios.post('https://jbh-mockserver.onrender.com/login',{
      userName: e.target[0].value,
      password: 'ftf'
    }).then(response =>{
      console.log(response.data.user.userName);
      localStorage.setItem('userToken' ,response.data.token)
      setLogIn(response.data.user)
      nav('/')
    })
  }
  return <form onSubmit={onSubmit}>
    <input type="text" placeholder='name' />
    <button type='submit'> submit</button>
  </form>
}
