import React from 'react'
import PlusMinus from './PlusMinus'
import { Link } from 'react-router-dom'
export default function Item({ item }) {
    let { name, emoji, price, id } = item
    return <div className='item' >
        <Link to={"http://localhost:5173/item/" + id}>
            <div className='pirtei_muzar'>
                <p>{name}</p>
                <p>{price}</p>
                <p>{emoji}</p>
            </div>
        </Link>
        <PlusMinus classi={'container_button_add_or_minus'} item={item} id={id} />
    </div>
}
