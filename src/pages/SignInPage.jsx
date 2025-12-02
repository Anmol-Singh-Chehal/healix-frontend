import React, { useEffect } from 'react'
import loginImage from "@/assets/loginImage.png"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Eye, EyeClosed } from "lucide-react"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import ShowErrorMessage from '@/components/ShowErrorMessage'
import { signInFormSchema } from '@/lib/schemas/signInForm.schema'
import SubmittingFormBox from '@/components/SubmittingFormBox'
import AlertBox from '@/components/AlertBox'
import { useSignInUserMutation } from '@/api/user/userApi'
import { useSelector, useDispatch } from 'react-redux'
import { setIsLoggedIn } from '@/features/user.slice'

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [signInUser, { data, isLoading, isSuccess, error }] = useSignInUserMutation();
  const dispatch = useDispatch();
  
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isSubmitted },
    reset,
  } = useForm({
    resolver: zodResolver(signInFormSchema),
  });

  const submitForm = async (data) => {
    await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
    await signInUser(data);
  };

  useEffect(() => {
    if(isSuccess){
      reset({});
      dispatch(setIsLoggedIn({ isLoggedIn: true }));
      navigate("/");
    }
  }, [isSuccess]);

  return (
    <main className='p-4 flex flex-col gap-2 items-center  justify-center min-h-[85vh]
    min-tablet:min-h-[90vh] relative'>

      {isSubmitting && <SubmittingFormBox/>}
      
      <section className='border-t-[8px] border-t-indigo-900 flex flex-col gap-6 pt-4 pb-4 px-4 border-[1px] border-[#31353e] rounded-lg
      min-tablet:flex-row min-tablet:items-center
      min-tablet:h-[75vh]'>

        <img src={loginImage} alt="login-image" className='min-tablet:w-3/5'/>

        <form className='flex flex-col gap-2 min-tablet:w-2/5' onSubmit={handleSubmit(submitForm)}>

          {error && <AlertBox message={error?.data?.message}/>}
          {isSuccess && <AlertBox message={data.message}/>}

          <div className='flex flex-col gap-1'>
            <label htmlFor="email" className=' cursor-pointer w-fit font-semibold'>Enter your email</label>
            <Input { ...register("email") } id={"email"} type={"email"} placeholder={"Email"} className={"font-semibold"}/>
            { errors.email && <ShowErrorMessage message={errors.email.message}/> }
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="password" className='w-fit font-semibold cursor-pointer '>Enter your password</label>
            <div className=' relative'>
              <Input {...register("password")} id={"password"} type={showPassword ? "text": "password"} placeholder={"Password"} className={"font-semibold"}/>

              <div className='absolute top-0 right-0 flex items-center h-full mr-3'>
                { showPassword ?
                <Eye onClick={()=>setShowPassword(!showPassword)} className='cursor-pointer resp-icon'/> :
                <EyeClosed onClick={()=>setShowPassword(!showPassword)} className='cursor-pointer res-icon'/>}
              </div>
            </div>
            { errors.password && <ShowErrorMessage message={errors.password.message}/> }
          </div>

          <Button size={"lg"} className={"mt-2 cursor-pointer resp-text-3  border-[2px] border-indigo-800 bg-indigo-800 text-white rounded-full hover:bg-indigo-900 hover:border-indigo-900 min-tablet:mt-6"}>Log In</Button>

        </form>
      </section>

      <span className='flex gap-2 items-center'>
        <h3 className='font-semibold'>Don't have an account yet?</h3>
        <Button size={"sm"} className={"cursor-pointer rounded-full"} onClick={()=>navigate("/sign-up")}>Sign Up</Button>
      </span>

    </main>
  )
}

export default SignInPage
