export default function Item(props) {
    let amount = props.amount
    const hanleMinus = ()=>{
        if(props.amount > 0){
            props.changeAmout(props.namei, amount-1)
            props.hanlePluscart((props.namei),(amount-1))
            props.setPay(props.pay - (props.price))
        }
    }
    const hanlePlus = ()=>{
        props.changeAmout(props.namei, amount+1)
        props.hanlePluscart((props.namei),(amount+1))
        props.setPay(props.pay + (props.price))
    }
    return <div className="item">
        <p>{props.namei}</p>
        <p>{props.emoji}</p>
        <p>PRICE: {props.price}</p>
        <div>
        <button className="buttonsAmount" onClick={hanlePlus}>+</button>
        <span className="cnt">{amount}</span>
        <button className="buttonsAmount" onClick={hanleMinus}>-</button>
        </div>
    </div>
}