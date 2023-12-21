import React from 'react'
import ItemCart from './ItemCart'
import { useContext } from 'react'
import DataContext from './context/DataContext'
export default function CartList() {
    const {cart} = useContext(DataContext)
  return <div className='cartList'>
    <h1>CART SHOPING</h1>
    {(Object.keys(cart).length > 0
    ?
    Object.values(cart).map(e => <ItemCart key={e.id} item = {e} />)
    :
    null
    )}
    </div>
}
