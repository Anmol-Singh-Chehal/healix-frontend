import React from 'react'

const UserDetails = ({ title, value }) => {
  return (
    <div className='font-semibold resp-text-2'>
      <span className='text-gray-700'>{title}</span>
      <span className='text-gray-700'>{": "}</span>
      <span className='text-indigo-700'>{value}</span>
    </div>
  )
}

export default UserDetails
