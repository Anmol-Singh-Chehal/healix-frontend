import React from 'react'
import signUpImage from "@/assets/signUpImage.png"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Eye, EyeClosed } from "lucide-react"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpFormSchema } from '@/lib/schemas/signUpForm.schema'
import ShowErrorMessage from '@/components/ShowErrorMessage'
import { useTheme } from '@/components/theme/ThemeProvider'
import SubmittingFormBox from '@/components/SubmittingFormBox'
import AlertBox from '@/components/AlertBox'
import { useSignUpUserMutation } from '@/api/user/userApi'

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [signUpUser, { data, error, isLoading, isSuccess }] = useSignUpUserMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors, isSubmitting, isSubmitted},
  } = useForm({ 
    defaultValues: {},
    resolver: zodResolver(signUpFormSchema)
  });

  const submitForm = async (data) => {
    await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
    const res = await signUpUser(data);
  };

  useEffect(() => {
    if(isSuccess){
      reset({});
      navigate("/sign-in");
    }
  }, [isSuccess]);

  return (
    <main className='flex flex-col justify-center items-center gap-2 p-4 min-tablet:min-h-[90vh]
    min-tablet:justify-center relative'>

      {isSubmitting && <SubmittingFormBox/>}

      <section className={`flex flex-col justify-center items-center p-4 border-t-[8px] border-t-indigo-900 border-[1px] rounded-lg
      min-tablet:flex-row ${
        theme == "light" ? "border-gray-200" : "border-[#31353e]"
      }`}> 
        <img src={signUpImage} alt="sign-up-image" className='min-tablet:w-3/5'/>

        <form onSubmit={handleSubmit(submitForm)} className='flex flex-col gap-2
        min-tablet:w-2/5'>
          
          {error && <AlertBox message={error?.data?.message}/>}
          {isSuccess && <AlertBox message={data.message}/>}

          <p className='self-center resp-text-2 text-indigo-700 cursor-pointer'>Please fill the form carefully</p>
          <div className='flex flex-col gap-1 font-semibold'>
            <label htmlFor="firstname" className='cursor-pointer'>Enter your name</label>
            <div className='flex gap-2'>
              <Input {...register("firstname")} id={"firstname"} type={"text"} placeholder={"First name"}/>
              <Input {...register("lastname")} type={"text"} placeholder={"Last name"}/>
            </div>
            { errors.firstname &&  <ShowErrorMessage message={errors.firstname.message}/>}
            { errors.lastname && <ShowErrorMessage message={errors.lastname.message}/> }
          </div>

          <div className='flex flex-col gap-1 font-semibold'>
            <label htmlFor="dob" className='cursor-pointer'>Enter your date of birth and gender</label>
            <div className='flex gap-4'>

              <Input id={"dob"} type={"date"} {...register("dateOfBirth")} className={"w-1/2"}/>

              <div className='flex w-1/2 gap-3'>

                <div className='flex items-center gap-2'>
                  <Input id={"male"} {...register("gender")}  value="male" type={"radio"}  className='cursor-pointer'/>
                  <label htmlFor="male" className='cursor-pointer'>Male</label>
                </div>

                <div className='flex items-center gap-2'>
                  <Input id={"female"} {...register("gender")}  value="female" type={"radio"}  className='cursor-pointer'/>
                  <label htmlFor="female" className='cursor-pointer'>Female</label>
                </div>

              </div>
            </div>
            { errors.dateOfBirth && <ShowErrorMessage message={errors.dateOfBirth.message}/> }
            { errors.gender && <ShowErrorMessage message={errors.gender.message}/> }
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="email" className=' cursor-pointer w-fit font-semibold'>Enter your email</label>
            <Input {...register("email")} id={"email"}  type={"email"} placeholder={"Email"} className={"font-semibold"}/>
            { errors.email && <ShowErrorMessage message={errors.email.message}/> }
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="password" className='w-fit font-semibold cursor-pointer '>Enter your password</label>
            <div className=' relative'>
              <Input {...register("password")} id={"password"} type={showPassword ? "text": "password"} placeholder={"Password"} className={"font-semibold"}/>

              <div className='absolute top-0 right-0 flex items-center h-full mr-3'>
                { showPassword ?
                <Eye onClick={()=>setShowPassword(!showPassword)} className='cursor-pointer w-5 h-5'/> :
                <EyeClosed onClick={()=>setShowPassword(!showPassword)} className='cursor-pointer w-5 h-5'/>}
              </div>
            </div>
            { errors.password && <ShowErrorMessage message={errors.password.message}/> }
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor="confirm-password" className='w-fit font-semibold cursor-pointer '>Confirm your password</label>
            <div className=' relative'>
              <Input {...register("confirmPassword")} id={"confirm-password"} type={showConfirmPassword ? "text": "password"} placeholder={"Confirm password"} className={"font-semibold"}/>

              <div className='absolute top-0 right-0 flex items-center h-full mr-3'>
                { showConfirmPassword ?
                <Eye onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className='cursor-pointer w-5 h-5'/> :
                <EyeClosed onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className='cursor-pointer w-5 h-5'/>}
              </div>
            </div>
            { errors.confirmPassword && <ShowErrorMessage message={errors.confirmPassword.message}/> }
          </div>

          <Button size={"lg"} className={`mt-2 resp-text-3  border-[2px]  min-tablet:mt-6 ${
            isSubmitting ? "border-indigo-950 bg-indigo-950 text-white rounded-full" : "border-indigo-800 bg-indigo-800 text-white rounded-full hover:bg-indigo-900 hover:border-indigo-900 cursor-pointer "
          } `} disabled={isSubmitting}>Sign Up</Button>

        </form>
      </section>

      <span className='flex gap-2 items-center'>
        <h3 className='font-semibold'>Already have an account?</h3>
        <Button size={"sm"} className={"cursor-pointer rounded-full"} onClick={()=>navigate("/sign-in")} >Log In</Button>
      </span>
    </main>
  )
}

export default SignUpPage
