import React from 'react'
import { useTheme } from './theme/ThemeProvider';

const VerticalCard = ({image, big, small}) => {
  const { theme } = useTheme();
  return (
    <div className={`border-[1px] ${
        theme == "light" ? "border-gray-200" : "border-[#31353e]"
      }  cursor-pointer hover:translate-y-[-4px] ease-in-out duration-300 rounded-lg min-start:max-tablet:w-full
    min-tablet:w-[calc(33%-9px)]
    `}>
      <div className=''>
        <img src={image} alt="VerticalCard-image" className='rounded-t-lg  object-cover w-full h-full'/>
      </div>
      <div className='flex flex-col font-semibold gap-2 px-4 py-2'>
        <h3 className='text-xl'>{big}</h3>
        <p className='text-sm'>{small}</p>
      </div>
    </div>
  )
}

export default VerticalCard
