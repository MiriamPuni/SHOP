import ExhibitItem from './ExhibitItem'
import ItemList from './ItemList'
import Categories from './categories'
import { useState, useEffect } from 'react'
export default function () {
  return <div className='content'>
  <a href='http://localhost:5173/'><button className='category_button'><i className="fa-solid fa-house"></i></button></a>
  {(location.pathname == '/')
  ?
  <Categories/>
  :
  (location.pathname.includes('categories')
  ?
  <ItemList/>
  :
  <ExhibitItem/>
  )
}
  </div>
}



// const [url , setUrl] = useState()

// location.href = '/categories'

// useEffect(()=>{(url != location.pathname)? location.href = url: null},[url])

{/* {(url == '/categories') ? <Categories setUrl = {setUrl}/> : null} */}
{/* {(url=='/categories')? location.href = url : console.log('dxcvu')} */}
{/* {url!=='/categories' && url.includes('/categories') && <ItemList/>} */}