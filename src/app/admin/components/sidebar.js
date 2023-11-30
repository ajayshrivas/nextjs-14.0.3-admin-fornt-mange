import Link from "next/link";

export default function Sidebar(){

    return(<>
            <div className="p-2 bg-white w-60 flex flex-col hidden md:flex" id="sideNav">
                <nav>
                    <Link
                    className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white"
                    href="/admin/profile"
                    >
                    <i className="fas fa-home mr-2" />
                    Profile
                    </Link>
                    <Link
                    className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white"
                    href="/admin/Users"
                    >
                    <i className="fas fa-file-alt mr-2" />
                    Users
                    </Link>
                    <Link
                    className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white"
                    href="#"
                    >
                    <i className="fas fa-users mr-2" />
                    Usuarios
                    </Link>
                    <Link
                    className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white"
                    href="#"
                    >
                    <i className="fas fa-store mr-2" />
                    Comercios
                    </Link>
                    <Link
                    className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white"
                    href="#"
                    >
                    <i className="fas fa-exchange-alt mr-2" />
                    Transacciones
                    </Link>
                </nav>
                {/* Ítem de Cerrar Sesión */}
                <Link
                    className="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white mt-auto"
                    href="/"
                >
                    <i className="fas fa-sign-out-alt mr-2" />
                    Go WebSite
                </Link>
                {/* Señalador de ubicación */}
                <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2" />
                {/* Copyright al final de la navegación lateral */}
                <p className="mb-1 px-5 py-3 text-left text-xs text-cyan-500">
                    Copyright WCSLAT@2023
                </p>
            </div>
        </>);
}