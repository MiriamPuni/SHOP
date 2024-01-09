import {useState , useEffect} from 'react'
import Item from './Item'
import { useParams} from 'react-router-dom';
export default function ItemList() {
  let category = useParams().categoryName
  const [listItem, setListItem] = useState([])
  useEffect(()=>{fetch(`https://jbh-mockserver.onrender.com/categories/${category}`)
  .then(r=> r.json()
  .then(re=>setListItem(re)))},[category])
  return <div className='itemList'>
    {listItem.map(e => <Item key = {e.id} item ={e}/>)}
    </div>
}