import React from 'react'
import data from './data'

export default function Kategoryot({kategorya, setItems}) {
  return <div>
    <div className='kategorya' onClick={()=>setItems(data[kategorya])}>{kategorya}</div>

    </div>
}
