import React from 'react'
import PlusMinus from './PlusMinus'
export default function ItemCart({item}) {
    let { name, price, qty, emoji, id } = item
    return <div className='itemCart'>
        <div>
            <p>{name} {emoji}</p>
            <p>{price}</p>
            <p>{qty}</p>
        </div>
        <PlusMinus classi = {'container_button_in_cart'} id = {id}/>
    </div>
}
