import React from 'react'
import { useTheme } from './theme/ThemeProvider'
import HeartBeatLoader from './HeartBeatLoader';

const SubmittingFormBox = () => {
  const { theme } = useTheme();
  return (
    <section className={`absolute w-full h-full z-50 flex justify-center items-center backdrop-blur-[2px]`}>
      <div className={`cursor-pointer flex flex-col items-center w-fit h-fit rounded-lg border-[1px] border-t-[8px] border-t-indigo-800 ${ theme=="light" ? "bg-white" : "bg-[#1f1f1f]" } min-start:max-tablet:w-[30vw] min-start:max-tablet:h-[30vw]
      min-tablet:w-[20vw]
      min-tablet:h-[20vw] justify-center
      min-start:gap-3
      min-tablet:gap-6`}>
        <HeartBeatLoader/>
        <p className='resp-text-3 text-indigo-600 '>Submitting form...</p>
      </div>
    </section>
  )
}

export default SubmittingFormBox
