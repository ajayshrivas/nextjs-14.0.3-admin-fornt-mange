import Link from "next/link";
export default function Footer() {
    return (
          <>
           {/* Footer Section */}
            <div className="bg-gray-800 text-white p-4">
                <div className="my-login-reg">
                  <Link href="/login" className="mr-2 bg-blue-600 text-white p-2 rounded  leading-none flex items-center">Login</Link>
                  <Link href="/registration" className="mr-2 bg-blue-800 text-white p-2 rounded  leading-none flex items-center">Registration</Link>
                </div>
                <div className="container mx-auto text-center">
                {/* Footer Content */}
                <p>© 2023 Your Company. All rights reserved.</p>
                </div>
            </div>
          </>
         )
  }