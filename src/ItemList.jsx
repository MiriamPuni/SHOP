import React from 'react'
import Item from './Item'
export default function ItemList({items}) {
  return <div className='itemList'>
    {items.map(e => <Item key = {e.id} item ={e}/>)}
    </div>
}
