'use client'
import Input from '../ui/input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '@/schema/auth.schema'
import { TLogin } from '@/types/auth.types'
import { login } from '@/api/auth.api'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'


const LoginForm = () => {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<TLogin>({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(loginSchema)
    })

    //* mutation
    const { mutate, isPending } = useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            toast.success(data?.message ?? 'Login success')
            router.replace('/')
        },
        onError: (error) => {
            toast.error(error?.message ?? 'Login failed')
        }
    })

    // on submit
    const onSubmit = async (data: TLogin) => {
        mutate(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 mt-4' >
            {/* email input */}
            <Input
                register={register}
                id='email'
                label='Email'
                name='email'
                placeholder='johndoe@gmail.com'
                type='text'
                error={errors?.email?.message}
            />

            {/* password input */}
            <Input
                // onChange={onChange}
                register={register}
                id='password'
                name='password'
                label='Password'
                placeholder='enter your password'
                type={'password'}
                error={errors?.password?.message}

            />

            {/* submit button */}
            <div className='mt-3'>
                <button
                    type={'submit'}
                    className='bg-sky-500 text-white  font-bold w-full py-3  cursor-pointer rounded-sm hover:bg-sky-400
                             active:bg-sky-600 transition-all duration-300'
                >
                    Login
                </button>
            </div>
        </form>
    )
}

export default LoginForm
