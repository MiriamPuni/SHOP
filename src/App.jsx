import React, { useEffect, useState } from 'react'
import './App.css'
import Layout from './Layout'
import UserContext from './context/UserContext';
import { Route,Routes, useNavigate} from 'react-router-dom';
import LogIn from './LogIn';
export default function App() {
  const [logIn, setLogIn] = useState(localStorage.getItem('userToken')? localStorage.getItem('userToken'): false)
  const nav = useNavigate()
  useEffect(()=>{if(!logIn){
    nav('/login')
  }}, [logIn])

  return <UserContext.Provider value={{ logIn, setLogIn }}>
    <Routes>
      <Route path='/login' element = {<LogIn/>}/>
      <Route path='*' element = {<Layout/>}/>
    </Routes>
  </UserContext.Provider>
}
