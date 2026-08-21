'use client'
import React from 'react'
import Input from '../ui/input'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '@/schema/auth.schema'
const RegisterForm = () => {

  const {register,watch,handleSubmit,formState: { errors }}=useForm({
    defaultValues: {
            full_name: '',
            email: '',
            password: '',
            c_password: '',
            phone: '',
    },
    resolver:yupResolver(registerSchema)
  })

  return (
    <div>
        <form  onSubmit={handleSubmit((data) => {
            console.log(data)
          })}
          className='flex flex-col gap-6 mt-4'>

            <Input register={register} id='full_name' label='full_name' name='full_name' placeholder='your full_name' type='text' error={errors.full_name?.message}/>

            {/*email input */}
            
            <Input register={register} id='email' label='email' name='email' placeholder='your@gmail.com' type='text' error={errors.email?.message}/>

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

             <Input register={register} id='c_password' label='password' name='c_password' placeholder='retype your password ' type='password' error={errors.c_password?.message}/>

              <Input register={register} id='phone' label='phone' name='phone' placeholder='XXXXXXXXXX' type='text' error={errors.phone?.message}/>
              
            

            
            {/*submit input */}
            <div className='mt-5'>
                <button type={'submit'} className='bg-sky-500 text-white font-bold w-full py-3 cursor-pointer rounded-sm hover:bg-sky-400 active:bg-sky-600 transition-all duration-300'>Create Account</button>
            </div>

        </form>
    </div>
  )
}

export default RegisterForm