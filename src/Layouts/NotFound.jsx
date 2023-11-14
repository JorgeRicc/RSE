


const NotFound = (props) => {

    return(
        <section className="bg-white dark:bg-gray-900 w-[100vw] h-[100vh]">
                <div className="mx-auto max-w-screen-sm text-center w-[100vw] h-[100vh] flex justify-center items-center flex-col">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold text-green-500 lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-green-500 md:text-4xl dark:text-white">Pagina no encontrada.</p>
                    <p className="mb-4 text-lg font-light text-green-600">La direccion a la que usted intenta acceder no existe o esta fuera de servicio.</p>
                </div>   
        </section>
    );
}

export default NotFound;