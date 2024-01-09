import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import DataContext from './context/DataContext'
export default function PlusMinus({classi,item, id}) {

    const {cart, setCart, order, setOrder} = useContext(DataContext)

    const handlePlus = () => {
        let newCart = { ...cart }
        if (newCart[id]) {
            newCart[id].qty += 1
        }
        else {
            newCart[id] = { ...item, qty: 1 }
            newCart[id]['qty'] = 1
            setOrder(old => old +1)
            newCart[id].order = order
        }
        setCart(newCart)
    }
    const handleMinus = () => {
        let newCart = { ...cart }
        if (newCart[id].qty == 1) {
            delete newCart[id]
        }
        else {
            newCart[id].qty -= 1
        }
        setCart(newCart)
    }
    const [ch, setCh] = useState(false)
    const funcCh = () => (ch == false) ? setCh(true) : ch = setCh(false)
  return <div>
            {(classi == 'container_button_in_cart')
            ?
            (ch == true
            ?
            <div className={classi}>
                <button onClick={handlePlus}>+</button>
                <span className='funcCh' onClick={funcCh}>{cart[id].qty}</span>
                <button onClick={handleMinus}>-</button>
            </div>
            :
            <div className='button_ch'>
                <span className='funcCh' onClick={funcCh}>{cart[id].qty}</span>
            </div>)
            :
            (cart[id])
                ?
                <div className = {classi}>
                <button onClick={handlePlus}>+</button>
                <span>{cart[id]?.qty || 0}</span>
                <button onClick={cart[id] && handleMinus}>-</button>
            </div>
            :
            <div className='container_button_add' onClick={handlePlus}>Add to cart</div>
            }
    </div>
}
