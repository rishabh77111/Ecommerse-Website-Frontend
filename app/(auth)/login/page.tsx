import LoginForm from "@/components/common/form/login.form";
import { Metadata } from "next";
import Link from "next/link";

export const metadata:Metadata={
    title:"Login | Ecommerse App",
    description:"Ecommerse App Login Page"
}

const LoginPage = () => {
  return (
    <main className=" h-screen flex justify-center items-center">
        <section className="border border-gray-200 px-5 py-6 rounded-lg min-w-80">

          {/*heading */}
          <div>
            <h1 className="text-xl font-semibold text-center text-sky-600">Login</h1>
            <p className="text-sm font-normal text-gray-700 mt-0.5">Welcome Back</p>
          </div>

          {/*form */}
          <LoginForm/>

           {/*  */}
           <div>
              <Link href={'/forgot-password'}>
                <p className="text-sky-500 text-center">forgot password?</p>
              </Link>
            <p className="text-center text-[14px]">Don&apos;t have an Account? 
              <Link href={'/register'}>
                <span className="text-sky-500 font-semibold px-2">Sign Up</span>
              </Link>
            </p>
           </div>

        </section>
    </main>
  )
}

export default LoginPage;