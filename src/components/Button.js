import React from 'react'

const Button = ({name}) => {
  return (
    <div className='p-2 m-2 bg-gray-200 rounded-lg hover:bg-gray-400'>{name}</div>
  )
}

export default Button