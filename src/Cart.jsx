import ItemCart from "./ItemCart"
export default function Cart(props) {
    return <div className="cart">
        <h1>SHOPING CART</h1>
        {props.listCart.map(e =>
            <ItemCart
                hanleCart = {props.hanleCart}
                key={e.id}
                price={e.price}
                id={e.id}
                namei={e.name}
                amount={e.amount} />
        )}
    </div>
}
