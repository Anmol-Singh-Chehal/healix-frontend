import React from 'react'
import quizImage from "@/assets/quizImage.png"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import QuizBox from '@/components/QuizBox'

const QuizPage = () => {
  return (
    <main className='p-4 flex flex-col gap-2 items-center justify-center 
    min-start:max-tablet:h-full
    min-tablet:min-h-[90vh]'>
      
      <section className='border-t-[8px] border-t-indigo-900 flex flex-col gap-6 pt-4 pb-4 px-4 border-[1px] border-[#31353e] rounded-lg
      min-tablet:flex-row min-tablet:items-center
      min-tablet:h-[75vh]
      min-start:max-tablet:h-full'>

        <div className='min-tablet:w-2/5'>
          <img src={quizImage} alt="login-image" className=' object-contain
          '/>
        </div>
        
        <QuizBox/>
      </section>

    </main>
  )
}

export default QuizPage
