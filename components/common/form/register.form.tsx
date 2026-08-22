'use client'
import React from 'react'
import Input from '../ui/input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '@/schema/auth.schema'
import { useMutation } from '@tanstack/react-query'
import { signUp } from '@/api/auth.api'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { TRegister } from '@/types/auth.types'

const RegisterForm = () => {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            full_name: '',
            email: '',
            password: '',
            c_password: '',
            phone: '',
        },
        resolver: yupResolver(registerSchema)
    })

    const { mutate, isPending } = useMutation({
        mutationFn: signUp,
        onSuccess: (data) => {
            toast.success(data?.message ?? 'Account created')
            router.replace('/login')
        },
        onError: (error) => {
            toast.error(error?.message ?? 'Something went wrong')
        }
    })

    // on submit
    const onSubmit = (data: TRegister) => {
        mutate(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 mt-4' >

            {/* email input */}
            <Input
                register={register}
                id='full_name'
                label='Full Name'
                name='full_name'
                placeholder='John Doe'
                type='text'
                error={errors?.full_name?.message}

            />

            {/* email input */}
            <Input
                register={register}
                id='email'
                label='Email'
                name='email'
                placeholder='johndoe@gmail.com'
                type='email'
                error={errors?.email?.message}

            />

            {/* password input */}
            <Input
                register={register}
                id='password'
                name='password'
                label='Password'
                placeholder='enter your password'
                type={'password'}
                error={errors?.password?.message}

            />
            {/* confirm password input */}
            <Input
                register={register}
                id='c_password'
                name='c_password'
                label='Confirm Password'
                placeholder='retype your password'
                type={'password'}
                error={errors?.c_password?.message}

            />

            {/* phone input */}
            <Input
                register={register}
                id='phone'
                name='phone'
                label='Phone'
                placeholder='9865389767'
                type={'text'}
                error={errors?.phone?.message}

            />

            {/* submit button */}
            <div className='mt-3'>
                <button
                    type={'submit'}
                    className='bg-sky-500 text-white  font-bold w-full py-3  cursor-pointer rounded-sm hover:bg-sky-400
                             active:bg-sky-600 transition-all duration-300'
                >
                    Create Account
                </button>
            </div>
        </form>
    )
}

export default RegisterForm
