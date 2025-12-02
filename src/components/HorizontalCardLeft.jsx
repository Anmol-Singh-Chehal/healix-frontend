import React from 'react'
import { useTheme } from './theme/ThemeProvider'

const HorizontalCardLeft = ({image, small, big}) => {
  const { theme } = useTheme();

  return (
    <div className={`border-[1px] border-[#31353e]  cursor-pointer hover:translate-y-[-4px] ease-in-out duration-300 rounded-lg 
    flex min-start:max-tablet:w-full
    min-tablet:w-[calc(50%-16px)]
    ${
      theme == "light" ? "border-gray-200" : "border-[#31353e]"
    }`}>

      <div className='w-2/5'>
        <img src={image} alt="VerticalCard-image" className='rounded-l-lg  object-cover w-full h-full'/>
      </div>

      <div className='flex flex-col font-semibold gap-2 px-4 py-2
      w-3/5'>
        <h3 className='text-xl'>{big}</h3>
        <p className='text-sm 
        min-start:max-mobile:line-clamp-3
        min-tablet:max-laptop:line-clamp-4'>{small}</p>
      </div>
    </div>
  )
}

export default HorizontalCardLeft
