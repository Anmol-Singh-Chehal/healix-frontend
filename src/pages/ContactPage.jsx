import React from 'react'
import contactImage from "@/assets/contactImage.png"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Seperator from '@/components/Seperator'
import { Textarea } from '@/components/ui/textarea'

const ContactPage = () => {
  return (
    <main className='p-4 flex flex-col gap-2 items-center  justify-center min-h-[85vh]
    min-tablet:min-h-[90vh]'>
      
      <section className='border-t-[8px] border-t-indigo-900 flex flex-col gap-6 pt-4 pb-4 px-4 border-[1px] border-[#31353e] rounded-lg w-full 
      min-tablet:flex-row min-tablet:items-center
      min-tablet:h-[75vh]'>
        <img src={contactImage} alt="login-image" className='
        min-tablet:w-2/4
        min-laptop:w-2/5'/>

        <form className='flex flex-col gap-2 
        min-tablet:w-2/4'>

          <div className='flex flex-col gap-1'>
            <label htmlFor="fullname" className=' cursor-pointer w-fit font-semibold'>Enter your fullname</label>
            <Input id={"fullname"} name={"fullname"} type={"text"} placeholder={"Fullname"} className={"font-semibold"}/>
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="email" className='w-fit font-semibold cursor-pointer '>Enter your Email</label>
            <Input id={"email"} name={"email"} type={"email"} placeholder={"Email"} className={"font-semibold"}/>
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="message" className=' cursor-pointer w-fit font-semibold'>Enter your Message</label>
            <Textarea id={"message"}
            placeholder="Type your message here" 
            rows={8}
            className="font-semibold max-h-[200px]"
          />
          </div>

          <Button size={"lg"} className={"mt-2 cursor-pointer resp-text-3  border-[2px] border-indigo-800 bg-indigo-800 text-white rounded-full hover:bg-indigo-900 hover:border-indigo-900 min-tablet:mt-6"}>Contact Us</Button>

        </form>
      </section>
    </main>
  )
}

export default ContactPage
