import React from 'react'
import ItemList from './ItemList'
export default function ({items}) {
  return (
    <div className='content'>
      <ItemList items = {items}/>
    </div>
  )
}
