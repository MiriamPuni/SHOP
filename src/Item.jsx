import React from 'react'
import PlusMinus from './PlusMinus'
export default function Item({item}) {
    let { name, emoji, price, id } = item
    return <div className='item'>
        <p>{name}</p>
        <p>{price}</p>
        <p>{emoji}</p>
        <PlusMinus classi={'container_button_add_or_minus'} item={item} id={id}/>
    </div>
}
