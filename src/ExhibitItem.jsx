import { useEffect, useState } from "react";
import PlusMinus from "./PlusMinus";
import { useParams } from "react-router-dom";
export default function ExhibitItem() {
  const [item, setItem] = useState()
  const {itemID} = useParams()
  useEffect(() => {
    fetch('https://jbh-mockserver.onrender.com/items/'+ itemID)
    .then(r => r.json())
    .then(re => setItem(re) )
  }, [])
  
  return <div className="exhibitItem">
    {(item)
    ?
    <>
    <h1>{item.name}</h1>
    <h1>{item.emoji}</h1>
    <h1>{item.price} $</h1>
    <PlusMinus classi={'container_button_add_or_minus'} item={item} id={itemID}/>
    </>
    :
    null
  }
  </div>
}
