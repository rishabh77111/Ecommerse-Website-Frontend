import React from 'react'

interface Iprops{
    name:string,
    type?:'text' | 'password' | 'email',
    label:string,
    placeholder?:string,
    id:string,
}

const Input = ({name,type='text',label,placeholder='start typing..',id}:Iprops) => {
  return (
    <div className='flex flex-col gap-0.5'>
            <label className='text-md font-semibold text-gray-600' htmlFor={id}>{label}</label>
            <input name={name} placeholder={placeholder} type={type} id={id} className='border border-gray-300 px-2 py-3 rounded-md focus:outline-sky-600 focus:border-sky-500 placeholder:text-sky-500'>
            </input>
    </div>
  )
}

export default Input