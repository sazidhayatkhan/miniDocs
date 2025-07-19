import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
  const ref = useRef(null)
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-5 p-5'>
        {
            [1,2,3,4].map((item,index)=>(
                <Card key={index} reference={ref}/>
            ))
        }
    </div>
  )
}

export default Foreground