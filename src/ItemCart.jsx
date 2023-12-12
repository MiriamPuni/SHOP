export default function ItemCart(props) {
    return <div className="itemCart" onClick={()=> props.hanleCart(props.namei)}>
        <p>NAME: {props.namei}</p>
        <p>AMOUNT: {props.amount}</p>
        <p>PRICE: {props.amount * props.price}</p>
    </div>
}