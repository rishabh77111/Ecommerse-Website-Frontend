import React from 'react'
import { UseFormRegister } from 'react-hook-form'

interface Iprops{
    name:string,
    type?:'text' | 'password' | 'email',
    label:string,
    placeholder?:string,
    id:string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register:UseFormRegister<any>
}

const Input = ({name,type='text',label,placeholder='start typing..',id,register}:Iprops) => {
  return (
    <div className='flex flex-col gap-0.5'>
            <label className='text-md font-semibold text-gray-600' htmlFor={id}>{label}</label>
            <input {...register(name)}  placeholder={placeholder} type={type} id={id} className='border border-gray-300 px-2 py-3 rounded-md focus:outline-sky-600 focus:border-sky-500 placeholder:text-sky-500'>
            </input>
    </div>
  )
}

//name={name}  name,value,onchange done by register here return object

export default Input