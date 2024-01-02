import { useState, useEffect } from 'react'
import ItemList from './ItemList'
export default function Categories({setUrl}) {

  const [categories, setcategories] = useState([])
  const [imags, setImags] = useState([])

  useEffect(()=>{fetch('https://jbh-mockserver.onrender.com/categories')
.then(r => r.json())
.then(re=> {
  setcategories(Object.keys(re))
  setImags(Object.values(re))
})}, [])


  return <div className='Categories'>
    {/* {categories.map((e,i) => <div className='category' key={e} onClick={()=>location.href = `http://localhost:5173/categories/${e}`}> {e}<img src={imags[i]} alt="" /></div>)} */}
    {/* {categories.map((e,i) => <a href={'/categories/' + e}><div className='category' key={e} onClick={setUrl(`/categories/${e}`)}> {e}<img src={imags[i]} alt="" /></div></a>)} */}
    {categories.map((e,i) => <a href={'/categories/' + e}><div className='category' key={e} onClick={()=> <ItemList/>}> {e}<img src={imags[i]} alt="" /></div></a>)}
    
  </div>
}
