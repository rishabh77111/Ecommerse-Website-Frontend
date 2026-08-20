import React from 'react'
import Input from '../ui/input'
const RegisterForm = () => {
  return (
    <div>
        <form className='flex flex-col gap-6 mt-4'>

            <Input id='full_name' label='full_name' name='full_name' placeholder='your full_name' type='text'/>

            {/*email input */}
            
            <Input id='email' label='email' name='email' placeholder='your@gmail.com' type='email'/>

            {/* <div>
                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='your@gmail.com' type='email' id='email'>
                </input>
            </div> */}

            
            {/*password input */}

              <Input id='password' label='password' name='password' placeholder='your password' type='password'/>

              {/* <div>
                <label htmlFor='password'>Password</label>
                <input name='password' placeholder='your_password' type='password' id='password'>
                </input>
            </div> */}

             <Input id='c_password' label='password' name='c_password' placeholder='retype your password' type='password'/>

              <Input id='phone' label='phone' name='phone' placeholder='XXXXXXXXXX' type='text'/>
            

            
            {/*submit input */}
            <div className='mt-5'>
                <button type={'submit'} className='bg-sky-500 text-white font-bold w-full py-3 cursor-pointer rounded-sm hover:bg-sky-400 active:bg-sky-600 transition-all duration-300'>Create Account</button>
            </div>

        </form>
    </div>
  )
}

export default RegisterForm