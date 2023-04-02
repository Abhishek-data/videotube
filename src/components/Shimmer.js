import React from 'react'

function Shimmer() {
  return (
    <div className='flex flex-wrap'>
        {Array(20).fill("").map((a, index)=>(
            <div className='p-2 m-2 w-72 h-60 shadow-lg bg-gray-200' key={index}></div>
        ))}
    </div>
  )
}

export default Shimmer