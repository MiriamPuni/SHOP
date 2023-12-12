export default function Search(props) {
        return <div>
        <input type="text" name="in" id="in" onInput={(e)=> props.setInput(e.target.value)}/>
        <span>{props.inp.length}</span>
    </div>
}
