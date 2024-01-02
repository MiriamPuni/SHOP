// import {useState , useEffect} from 'react'
// import Item from './Item'
// export default function ItemList({category}) {
//   const [listItem, setListItem] = useState([])
//   useEffect(()=>{fetch(`https://jbh-mockserver.onrender.com/categories/${category}`)
// .then(r=> r.json()
// .then(re=>setListItem(re)))},[category])
//   return <div className='itemList'>
//     {listItem.map(e => <Item key = {e.id} item ={e}/>)}
//     </div>
// }
import {useState , useEffect} from 'react'
import Item from './Item'
export default function ItemList() {
  let category = location.pathname.replace('/categories/', '')
  const [listItem, setListItem] = useState([])
  useEffect(()=>{fetch(`https://jbh-mockserver.onrender.com/categories/${category}`)
  .then(r=> r.json()
  .then(re=>setListItem(re)))},[category])
  return <div className='itemList'>
    {listItem.map(e => <Item key = {e.id} item ={e}/>)}
    </div>
}