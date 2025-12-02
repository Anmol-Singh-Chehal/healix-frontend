import { AlertTriangleIcon } from 'lucide-react'
import React from 'react'

const AlertBox = ({ message }) => {
  return (
    <div className='text-sm font-semibold text-amber-600 flex items-center self-center gap-2 bg-amber-500/5 p-2 rounded-lg cursor-pointer'>
      <AlertTriangleIcon className='w-[18px] h-[18px]'/>
      <h4>{message}</h4>
    </div>
  )
}

export default AlertBox
