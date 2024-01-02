import { useEffect, useState } from "react";
export default function ExhibitItem() {
  // let { name, emoji, price, id } = item
  const [item, setItem] = useState()
  let id = location.pathname.replace('/item/', '')
  console.log(id);
  useEffect(() => {
    fetch('https://jbh-mockserver.onrender.com/items/'+ id)
    .then(r => r.json())
    .then(re => {
      setItem(re) 
    })
  }, [])

  return <div>
    {(item)
    ?
    <>
    {console.log(item)}
    <h1>{item.name}</h1>
    <h1>{item.emoji}</h1>
    <h1>{item.price} $</h1>
    </>
    :
    null
  }
  </div>
}
