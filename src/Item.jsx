import React from 'react'
import PlusMinus from './PlusMinus'
import ExhibitItem from './ExhibitItem'
export default function Item({item}) {
    let { name, emoji, price, id } = item
    return <div className='item' >
        <a href={"http://localhost:5173/item/" + id}>
        <>
        {console.log('uuuu')}
        <p>{name}</p>
        <p>{price}</p>
        <p>{emoji}</p>
        <PlusMinus classi={'container_button_add_or_minus'} item={item} id={id}/>
        </>
    </a>
    </div>
}
