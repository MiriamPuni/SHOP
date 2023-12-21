import React from 'react'

export default function Total({calcTotal}) {
  return <div className='total'>
    <p>to pay:</p>
    <p>{calcTotal().toFixed(2)} $</p>
    </div>
}
