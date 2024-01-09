import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { Link, useNavigate } from 'react-router-dom'
export default function Categories({setUrl}) {
  let nav = useNavigate()
  const [categories, setcategories] = useState([])
  const [imags, setImags] = useState([])

  useEffect(()=>{fetch('https://jbh-mockserver.onrender.com/categories')
.then(r => r.json())
.then(re=> {
  setcategories(Object.keys(re))
  setImags(Object.values(re))
})}, [])


  return <div className='Categories'>
    {/* {categories.map((e,i) => <Link to={'/categories/' + /e}><div className='category' key={e} onClick={()=> <ItemList/>}> {e}<img src={imags[i]} alt="" /></div></Link>)} */}
    {categories.map((e,i) => <div onClick={()=>nav('/categories/' + e)} className='category' key={e}> {e}<img src={imags[i]} alt="" /></div>)}
  </div>
}
