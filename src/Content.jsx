import Menu from './Menu'
import { useState } from 'react'
import ItemList from './ItemList'
import Cart from "./Cart"
import Search from '../Search'

const fruits = [
    {
        "id": "a1",
        "name": "Apple",
        "color": "Red",
        "emoji": "🍎",
        "price": 1.99
    },
    {
        "id": "a2",
        "name": "Banana",
        "color": "Yellow",
        "emoji": "🍌",
        "price": 0.99
    },
    {
        "id": "a3",
        "name": "Orange",
        "color": "Orange",
        "emoji": "🍊",
        "price": 2.49
    },
    {
        "id": "a4",
        "name": "Grapes",
        "color": "Purple",
        "emoji": "🍇",
        "price": 3.99
    },
    {
        "id": "a5",
        "name": "Strawberry",
        "color": "Red",
        "emoji": "🍓",
        "price": 2.79
    },
    {
        "id": "a7",
        "name": "Watermelon",
        "color": "Green",
        "emoji": "🍉",
        "price": 5.99
    },
    {
        "id": "a8",
        "name": "Pineapple",
        "color": "Yellow",
        "emoji": "🍍",
        "price": 3.89
    },
    {
        "id": "a9",
        "name": "Mango",
        "color": "Orange",
        "emoji": "🥭",
        "price": 2.99
    },
    {
        "id": "a10",
        "name": "Kiwi",
        "color": "Brown",
        "emoji": "🥝",
        "price": 1.79
    },
    {
        "id": "a11",
        "name": "Peach",
        "color": "Orange",
        "emoji": "🍑",
        "price": 2.29
    },
    {
        "id": "a12",
        "name": "Cherry",
        "color": "Red",
        "emoji": "🍒",
        "price": 4.99
    },
    {
        "id": "a13",
        "name": "Pear",
        "color": "Green",
        "emoji": "🍐",
        "price": 1.89
    },
    {
        "id": "a14",
        "name": "Plum",
        "color": "Purple",
        "emoji": "🍑",
        "price": 2.69
    },
    {
        "id": "a15",
        "name": "Raspberry",
        "color": "Red",
        "emoji": "🍇",
        "price": 3.49
    },
    {
        "id": "a16",
        "name": "Lemon",
        "color": "Yellow",
        "emoji": "🍋",
        "price": 1.49
    },
    {
        "id": "a17",
        "name": "Cranberry",
        "color": "Red",
        "emoji": "🍒",
        "price": 3.79
    },
    {
        "id": "a18",
        "name": "Apricot",
        "color": "Orange",
        "emoji": "🍑",
        "price": 2.19
    },
    {
        "id": "a19",
        "name": "Avocado",
        "color": "Green",
        "emoji": "🥑",
        "price": 4.99
    },
    {
        "id": "a20",
        "name": "Coconut",
        "color": "Brown",
        "emoji": "🥥",
        "price": 5.49
    }
]
const colors = []
fruits.forEach(f => { if (!colors.includes(f.color)) colors.push(f.color) })
fruits.forEach(f => { f.amount = 0 })


export default function Content() {
    const [listCart, setListCart] = useState([])
    const [filtered, setFiltered] = useState(fruits)
    const [pay, setPay] = useState(0)
    const hanleColor = (c) => {
        setFiltered(c ? fruits.filter(f => f.color == c) : fruits)
    }
    const hanleInput = (inp) => {
        setFiltered(inp ? fruits.filter(f => f.name.includes(inp)) : fruits)
    }
    const changeAmout = (nameFruit, amountFruit) => {
        fruits.map(e => { if (e.name == nameFruit) e.amount = amountFruit })
    }
    const hanleCart = (name) => {
        setFiltered(fruits.filter(f => f.name == name))
    }
    const hanlePluscart = (nameFruit, amountFruit) => {
        fruits.map(e => { if (e.name == nameFruit) e.amount = amountFruit })
        let fruitCart = fruits.filter(f => f.amount > 0)
        setListCart(fruitCart)
    }
    return <div id='contanier' >
        <div className='contanier_cart'>
            <Cart listCart={listCart} hanleCart={hanleCart} />
            <div className='pay'>{pay} $</div>
        </div>
        <div className='shop'>
            <div className="menu">
                <Search hanleInput={hanleInput}/>
                <Menu colors={colors} hanleColor={hanleColor} />
            </div>
            <ItemList pay={pay} setPay={setPay} filtered={filtered} hanlePluscart={hanlePluscart} changeAmout={changeAmout}
            />
        </div>
    </div>
}