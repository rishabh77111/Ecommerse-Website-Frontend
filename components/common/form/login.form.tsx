'use client'
import React from 'react'
import Input from '../ui/input'
import {useForm} from 'react-hook-form'
// import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '@/schema/auth.schema'
import { TLogin } from '@/types/auth.types'

// type TLogin={
//   email:string,
//   password:string
// }

// const loginSchema=yup.object({
//   email:yup.string().email('Invalid email format').required('email is required'),
//   password:yup.string().required()
// })

const LoginForm = () => {

  const {register,watch,handleSubmit,formState: { errors }}=useForm<TLogin>({
    defaultValues:{
      email:'',
      password:''
    },
    resolver:yupResolver(loginSchema)
  })

  const onSubmit=(data:TLogin)=>{
    console.log('form submitted',data);
  }


  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6 mt-4'>

            {/*email input */}
            
            <Input register={register} id='email' label='email' name='email' placeholder='your@gmail.com' type='text' error={errors.email?.message} />
             

            {/* <div>
                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='your@gmail.com' type='email' id='email'>
                </input>
            </div> */}

            
            {/*password input */}

              <Input register={register} id='password' label='password' name='password' placeholder='your password' type='password' error={errors.password?.message}/>

              {/* <div>
                <label htmlFor='password'>Password</label>
                <input name='password' placeholder='your_password' type='password' id='password'>
                </input>
            </div> */}
            

            
            {/*submit input */}
            <div className='mt-5'>
                <button type={'submit'} className='bg-sky-500 text-white font-bold w-full py-3 cursor-pointer rounded-sm hover:bg-sky-400 active:bg-sky-600 transition-all duration-300'>Login</button>
            </div>

        </form>
    </div>
  )
}

export default LoginForm