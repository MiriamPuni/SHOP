export default function Menu(props) {
    return <div className="menu_bu">
                <button className="bu" key={'all'} onClick={() => props.hanleColor()}>All</button>
                {props.colors.map(c => <button className="bu" key={c} onClick={() => props.hanleColor(c)}>{c}</button>)}
    </div>
}