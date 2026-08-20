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
    error?:string,
}

const Input = ({name,type='text',label,placeholder='start typing..',id,register,error}:Iprops) => {
  return (
    <div className='flex flex-col gap-0.5'>
            <label className='text-md font-semibold text-gray-6  00' htmlFor={id}>{label}</label>
            <input {...register(name)}  placeholder={placeholder} type={type} id={id} className={`border px-2 py-3 rounded-md focus:outline-none
    ${
      error
        ? "border-red-500 focus:border-red-500  focus:outline-red-500"
        : "border-gray-300 focus:border-sky-500 focus:outline-sky-600"
    }
    placeholder:text-sky-500
  `}>
            </input>


      {error && (
        <p className="text-red-500 h-3 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  )
}

//name={name}  name,value,onchange done by register here return object

export default Input