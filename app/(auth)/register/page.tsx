import RegisterForm from '@/components/common/form/register.form';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = {
    title: "Register | Ecommerce App",
    description: "Ecommerce App register page",
};

const RegisterPage = () => {
    return (
        <main className='h-screen flex justify-center items-center '>
            <section className='border border-gray-300 px-5 py-6 rounded-lg min-w-120'>
                {/* heading */}
                <div>
                    <h1 className='text-xl font-semibold text-center text-sky-600'>Create Account</h1>
                    <p className='text-sm font-normal text-gray-700 mt-0.5'>Welcome</p>
                </div>

                {/* form */}
                <RegisterForm />
                <div className='mt-1'>

                    <p className='text-center text-[14px]'>Already have an Account?
                        <Link href={'/login'}>
                            <span className='text-sky-500 font-semibold px-1'>Login</span>
                        </Link>

                    </p>
                </div>
            </section>
        </main>
    )
}

export default RegisterPage
