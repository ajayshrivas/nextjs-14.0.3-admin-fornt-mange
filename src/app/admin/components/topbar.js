export default function Topbar(){

    return(<>
        <div className="bg-white text-white shadow w-full p-2 flex items-center justify-between">
        <div className="flex items-center">
            <div className="hidden md:flex items-center">
            {" "}
            {/* Se oculta en dispositivos pequeños */}
            <img
                src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png"
                alt="Logo"
                className="w-28 h-18 mr-2"
            />
            <h2 className="font-bold text-xl">Nombre de la Aplicación</h2>
            </div>
            <div className="md:hidden flex items-center">
            {" "}
            {/* Se muestra solo en dispositivos pequeños */}
            <button id="menuBtn">
                <i className="fas fa-bars text-gray-500 text-lg" />{" "}
                {/* Ícono de menú */}
            </button>
            </div>
        </div>
    {/* Ícono de Notificación y Perfil */}
    <div className="space-x-5">
        <button>
        <i className="fas fa-bell text-gray-500 text-lg" />
        </button>
        {/* Botón de Perfil */}
        <button>
        <i className="fas fa-user text-gray-500 text-lg" />
        </button>
    </div>
    </div>
    </>);
}