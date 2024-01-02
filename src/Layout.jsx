import Content from './Content'
import Cart from './Cart'
import { useState} from 'react'
import DataContext from './context/DataContext';
export default function Layout() {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState({})
    return <DataContext.Provider value={{cart, setCart,items, setItems}}>
        <div className='body'>
            <Cart/>
            <Content/>
        </div>
    </DataContext.Provider>
}
