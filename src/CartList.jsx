import React, { useEffect, useState } from 'react'
import ItemCart from './ItemCart'
import { useContext } from 'react'
import DataContext from './context/DataContext'
export default function CartList() {
    const {cart} = useContext(DataContext)

    const [arr, setArr] = useState([])
    // console.log(Object.keys(cart).map(e =>cart[e].order));
    // console.log(Object.keys(cart).map(e =>cart[e].order).sort());
      // for(let n of Object.keys(cart).map(e =>cart[e].order).sort()){
        useEffect(()=>{
          setArr([])
          for (let m of Object.keys(cart)){
          for(let n = Object.keys(cart).map(e =>cart[e].order).length; n > -1; n--){
            // console.log(n);
            
              // console.log(m);
              console.log(cart[m].order);
              console.log(n);
              if (n == cart[m].order){
                setArr(old => [...old, m])
              }
            }
          }
          console.log(arr);
        }, [cart])

    
  return <div className='cartList'>
    <h1>CART SHOPING</h1>
    {/* {console.log(arr)} */}
    {(Object.keys(cart).length > 0
    ?
    Object.values(cart).map(e => <ItemCart key={e.id} item = {e} />)
    // arr.map(e => <ItemCart key={e.id} item = {e} />)
    :
    null
    )}
    </div>
}
