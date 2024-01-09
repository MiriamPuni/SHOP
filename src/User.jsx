import { useContext } from 'react';
import UserContext from './context/UserContext';
import { useNavigate } from 'react-router-dom';
export default function User() {
  const {logIn, setLogIn} = useContext(UserContext)
  const nav = useNavigate()
  return <div className='user'>
    <img className='avatar' src={logIn.avatar} alt="" />
      <h1>{logIn.userName}</h1>
      <button onClick={()=>{localStorage.removeItem('userToken');setLogIn();  nav('/login')}}>logout</button>
    </div>
}
