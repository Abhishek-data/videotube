import React from 'react'
import Button from './Button'

const list = ['All', 'Gaming', 'Songs', 'Live', 'Cricket', 'Cooking', 'Comedy', 'Live', 'Cricket', 'Cooking', 'Comedy', 'Gaming', 'Songs', 'Live', 'Programming']

const ButtonLIst = () => {
  return (
    <div className='flex'>
        {list.map((name, index)=><Button key={index} name={name}/>)}
        
        
    </div>
  )
}

export default ButtonLIst