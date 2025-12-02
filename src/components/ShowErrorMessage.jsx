import React from 'react'

const ShowErrorMessage = ({ message }) => {
  return (
    <div className='text-sm font-semibold text-red-600'>{message}</div>
  )
}

export default ShowErrorMessage
