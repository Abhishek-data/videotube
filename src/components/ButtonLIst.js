import React from 'react'
import Button from './Button'

const list = ['All', 'Gaming', 'Songs', 'Live', 'Cricket', 'Cooking', 'Comedy', 'Live', 'Cricket', 'Cooking', 'Comedy', 'Gaming', 'Songs', 'Live']

const ButtonLIst = () => {
  return (
    <div className='flex flex-wrap items-center h-16 p-2 m-3 '>
        {list.map((name, index)=><Button key={index} name={name}/>)}
        
        
    </div>
  )
}

export default ButtonLIst