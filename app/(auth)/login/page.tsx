import LoginForm from '@/components/common/form/login.form';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = {
    title: "Login | Ecommerce App",
    description: "Ecommerce App login page",
};

// const queryClient = new QueryClient()

const LoginPage = () => {
    return (
        <main className='h-screen flex justify-center items-center '>
            <section className='border border-gray-300 px-5 py-6 rounded-lg min-w-90'>
                {/* heading */}
                <div>
                    <h1 className='text-xl font-semibold text-center text-sky-600'>Login</h1>
                    <p className='text-sm font-normal text-gray-700 mt-0.5'>Welcome Back</p>
                </div>

                {/* form */}
                {/* <QueryClientProvider client={queryClient}> */}
                <LoginForm />
                {/* </QueryClientProvider> */}
                <div className='mt-1'>
                    <Link href={'/forgot-password'}>
                        <p className='text-sky-500 text-center text-[14px]'>forgot password?</p>
                    </Link>
                    <p className='text-center text-[14px]'>Don&apos;t have an Account?
                        <Link href={'/register'}>
                            <span className='text-sky-500 font-semibold px-1'>Sign Up</span>
                        </Link>

                    </p>
                </div>
            </section>
        </main>
    )
}

export default LoginPage
