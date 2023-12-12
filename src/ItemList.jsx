import Item from "./Item"
export default function ItemList(props) {
    return <div>
            <div id="itemList">
                {props.filtered
                    .map(f => <Item key={f.id}
                    namei={f.name}
                    price={f.price} 
                    emoji={f.emoji} 
                    amount = {f.amount} 
                    pay = {props.pay} 
                    setPay = {props.setPay} 
                    hanlePluscart = {props.hanlePluscart} 
                    changeAmout = {props.changeAmout}
                    />)}
            </div>
    </div>
}
