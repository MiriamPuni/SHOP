import React from 'react'
import CartList from './CartList'
import Total from './Total'
import DataContext from './context/DataContext'
import { useContext } from 'react'
export default function Cart() {
  const {cart, setCart} = useContext(DataContext)
  const calcTotal = () => {
    let total = 0
    Object.values(cart).map(e=>total += (e.qty * e.price))
    return total
  }
  return <div className='cart'>
    <CartList/>
    <Total calcTotal = {calcTotal}/>
    <div className='con_deleteAll'><div className='deleteAll' onClick={()=>setCart({})}>DELETE ALL</div></div>
    </div>
}
