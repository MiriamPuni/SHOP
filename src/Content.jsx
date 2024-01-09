import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import ExhibitItem from './ExhibitItem'
import ItemList from './ItemList'
import Categories from './categories'
import NotFound from './NotFound'
export default function () {
  let nav = useNavigate()
  return <div className='content'>
  <button onClick={()=>nav('/categories')} className='category_button'><i className="fa-solid fa-house"></i></button>
  <Routes>
    <Route path='/categories' element = {<Categories/>}/>
    <Route path='/' element = {<Categories/>}/>
    <Route path='/categories/:categoryName' element = {<ItemList/>}/>
    <Route path='/item/:itemID' element = {<ExhibitItem/>}/>
    <Route path='*' element = {<NotFound/>}/>
</Routes>
  </div>
}