import React, { useEffect } from 'react'
import mainImage from "@/assets/mainImage.png"
import box1 from "@/assets/box1.jpg"
import box2 from "@/assets/box2.jpg"
import { Button } from '@/components/ui/button'
import Seperator from '@/components/Seperator'
import VerticalCard from '@/components/VerticalCard'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@/components/theme/ThemeProvider'

const HomePage = () => {
  const { theme } = useTheme(); 
  const navigate = useNavigate();

  return (
    <main className=''>

      <section className='flex items-center 
      min-start:max-tablet:mx-8 min-start:max-tablet:flex-col
      min-tablet:mx-16 min-tablet:gap-8'>

        <img className='min-tablet:w-1/2 min-laptop:w-2/5' src={mainImage} alt="app-image" />

        <div className='flex flex-col min-start:max-tablet:gap-4
        min-start:max-tablet:items-center min-start:max-tablet:text-center
        min-tablet:w-1/2 min-tablet:gap-6'>
          <h1 className='font-semibold min-start:max-tablet:text-2xl
          min-tablet:text-3xl
          min-laptop:text-4xl'>Health checkup is now on fingertips! Its been very easy now!</h1>
          <p className='font-medium min-start:max-tablet:text-[12px]
          min-tablet:text-sm
          min-laptop:text-[16px]'>Your health matters. Track symptoms, get instant insights, and access trusted medical information anytime, anywhere — all from your phone.</p>
          <div className='flex gap-6'>
            <Button className={"cursor-pointer resp-text-3  w-fit border-[2px] border-indigo-800 bg-indigo-800 text-white rounded-full hover:bg-indigo-900 hover:border-indigo-900"}
            onClick={()=>navigate("/quiz")}>Get Started</Button>
            <Button className={`cursor-pointer resp-text-3 w-fit border-[2px] border-white hover:bg-indigo-900 text-white hover:border-indigo-900 rounded-full ${
              theme=="light" ? "bg-white border-black text-black hover:text-white": "bg-[#030712] text-white"
            }`}onClick={()=>navigate("/how-it-works")}>Learn More</Button>
          </div>
        </div>
      </section>
      <Seperator/>

      <section className='flex flex-col gap-4
      min-tablet:mx-4
       min-start:max-tablet:mx-6'> 
        <h2 className='resp-text-1'>Why use Healix?</h2>
        <div className='flex flex-wrap 
        min-start:max-tablet:gap-6
        min-tablet:gap-4'>
          <VerticalCard image={box1} big={"Easy Symptom Input"} small={"Select your symptoms from our organized list. No complicated forms—just quick clicks to tell us what you're experiencing. Our system matches your selections with possible conditions instantly."} />
          <VerticalCard image={box2} big={"Straightforward Results"} small={"Get a clear list of possible conditions ranked by symptom match. Each result includes basic information and typical medication approaches—all presented in an easy-to-understand format."}/>
        </div>
      </section>
      <Seperator/>

      <section
      className='flex flex-col gap-4 my-20 mx-6 items-center'>
        <h1 className='font-semibold text-center 
        min-tablet:text-5xl min-start:max-tablet:text-3xl cursor-pointer'>Get started with Helix today!</h1>
        <h2 className='text-center light-text 
        min-tablet:text-2xl mb-6 cursor-pointer min-start:max-tablet:text-xl'>No appointments needed. Get possible condition matches and medication information in minutes—free and confidential.</h2>
        <Button size={"lg"} className={"cursor-pointer resp-text-3 w-fit border-[2px] border-indigo-800 bg-indigo-800 text-white rounded-full hover:bg-indigo-900 hover:border-indigo-900"} onClick={()=>navigate("/quiz")}>Get Started Now</Button>
      </section>
      <Seperator/>
    </main>
  )
}

export default HomePage
