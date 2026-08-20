import React from 'react'
import Input from '../ui/input'
const LoginForm = () => {
  return (
    <div>
        <form className='flex flex-col gap-6 mt-4'>

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
            

            
            {/*submit input */}
            <div className='mt-5'>
                <button type={'submit'} className='bg-sky-500 text-white font-bold w-full py-3 cursor-pointer rounded-sm hover:bg-sky-400 active:bg-sky-600 transition-all duration-300'>Login</button>
            </div>

        </form>
    </div>
  )
}

export default LoginForm