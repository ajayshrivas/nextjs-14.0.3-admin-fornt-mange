'use client'
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
const Login = () =>{
    const router = useRouter();
    console.log(router);
    useEffect(() => {
      // Redirect to a different page after 3 seconds (for example)
      const redirectTimer = setTimeout(() => {
        router.push('/admin');
      }, 3000);
  
      // Clear the timer on component unmount (optional)
      return () => clearTimeout(redirectTimer);
    }, []); // Empty dependency array ensures the effect runs once on mount

    return(<>
        {/* component */}
        
        <div className="h-screen flex">
          <div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
            <div>
              <h1 className="text-white font-bold text-4xl font-sans">Demo</h1>
              <p className="text-white mt-1">
                The most popular peer to peer lending at SEA
              </p>
              <Link
                href="/"
                className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
              >
                Go Home
              </Link>
            </div>
          </div>
          <div className="flex w-1/2 justify-center items-center bg-white">
            <form className="bg-white">
              <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
              <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  className="pl-2 outline-none border-none"
                  type="text"
                  name=""
                  id=""
                  placeholder="Email Address"
                />
              </div>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  className="pl-2 outline-none border-none"
                  type="text"
                  name=""
                  id=""
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              >
                Login
              </button>
              <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
                Forgot Password ?
              </span>
              <Link href="/registration">Registration</Link>
            </form>
          </div>
        </div>
      </>
      )
}
export default Login;