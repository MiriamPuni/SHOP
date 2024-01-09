import Content from './Content'
import Cart from './Cart'
import {  useState } from 'react'
import DataContext from './context/DataContext';
import User from './User';

export default function Layout() {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState({})
    const [order, setOrder] = useState(0)
    return <DataContext.Provider value={{ cart, setCart, items, setItems, setOrder, order }}>
{}

            {<div className='body'>
                <User/>
                <Cart />
                <Content />
            </div>}

    </DataContext.Provider>
}
