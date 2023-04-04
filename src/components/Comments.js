import React from 'react'

const Comments = ({data}) => {
  const {name, message, comment} = data  
  return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-sm my-2'>
        <img className='w-12 h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQavCDvlRFf6Y1gcbHAoYvLDWSjR6GFpI1sYErd3F8&s" alt="userImage" />
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{message}</p>
        </div>
    </div>

  )
}

export default Comments