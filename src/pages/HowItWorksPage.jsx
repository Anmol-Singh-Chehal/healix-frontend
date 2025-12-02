import Seperator from '@/components/Seperator'
import React from 'react'
import box1 from "@/assets/box1.jpg";
import box2 from "@/assets/box2.jpg";
import { Button } from '@/components/ui/button'
import HorizontalCardLeft from '@/components/HorizontalCardLeft'
import HorizontalCardRight from '@/components/HorizontalCardRight'
import { useNavigate } from 'react-router-dom'

const HowItWorksPage = () => {
  const navigate = useNavigate();
  return (
    <main className='py-4'>
      
      <section className='flex flex-col gap-2 px-4'>
        <h1 className='resp-text-1 border-l-[6px] border-l-indigo-900 rounded-xl px-2 '>How it works? right!</h1>
        <p className='resp-text-2'>Healix guides you through a simple, intuitive assessment in just a few steps. Start by clicking the “Get Started Now” button, which opens a step-by-step symptom questionnaire. You’ll move through 20 quick screens—each presenting different symptom options. You can select one or more symptoms that match how you’re feeling, or skip a screen if none apply. </p>
        <p className='resp-text-2'>Once you complete the questionnaire, Healix instantly matches your entries against our medical database to generate a list of possible conditions along with commonly associated medications. Finally, you can download a full summary of your results with one click using the “Download PDF” button—ready to save, print, or share with your healthcare provider.</p>
      </section>
      <Seperator/>

      <section className='flex flex-col gap-4'>
        <h2 className='text-2xl font-semibold px-4'>That's why choose Healix.</h2>
        <div className='flex flex-wrap gap-4 mx-4'>
          <HorizontalCardLeft image={box1} big={"Easy Symptom Input"} small={"Select your symptoms from our organized list. No complicated forms—just quick clicks to tell us what you're experiencing. Our system matches your selections with possible conditions instantly."}/>
          <HorizontalCardRight image={box2} big={"Straightforward Results"} small={"Get a clear list of possible conditions ranked by symptom match. Each result includes basic information and typical medication approaches—all presented in an easy-to-understand format."}/>
        </div>
      </section>
      <Seperator/>

      <section
      className='flex flex-col gap-4 my-20 mx-6 items-center'>
        <h1 className='font-semibold text-center 
        min-tablet:text-5xl min-start:max-tablet:text-3xl cursor-pointer'>Get started with Helix today!</h1>
        <h2 className='text-center light-text 
        min-tablet:text-2xl mb-6 cursor-pointer min-start:max-tablet:text-xl'>No appointments needed. Get possible condition matches and medication information in minutes—free and confidential.</h2>
        <Button size={"lg"} className={"cursor-pointer resp-text-3 w-fit border-[2px] border-indigo-800 bg-indigo-800 text-white rounded-full hover:bg-indigo-900 hover:border-indigo-900"}onClick={()=>navigate("/quiz")}>Get Started Now</Button>
      </section>

      <Seperator/>
    </main>
  )
}

export default HowItWorksPage
