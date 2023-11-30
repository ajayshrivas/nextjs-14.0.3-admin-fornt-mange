import Link from "next/link";
export default function Menus() {
    return (
           <>
           {/* Header Section */}
            <header className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex items-center justify-between">
                {/* Logo or Site Name */}
                <div>
                    <Link href="/" className="text-2xl font-bold">
                    Your Logo
                    </Link>
                </div>
                {/* Navigation Menu */}
                <nav>
                    <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="hover:text-gray-300">
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-gray-300">
                        About
                        </Link>
                    </li>
                    <li>
                        <Link href="/Service" className="hover:text-gray-300">
                        Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-gray-300">
                        Contact
                        </Link>
                    </li>
                    </ul>
                </nav>
                </div>
            </header>
            {/* Your Content Goes Here */}
           </>
         )
  }